-- ============================================================
-- Supabase Schema untuk Omah Gembira
-- Tabel: galleries, videos, activities, materials
-- ============================================================

-- ── RPC: get user role (bypass RLS) ─────────────────────
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS TEXT AS $$
DECLARE
  user_role TEXT;
BEGIN
  SELECT role INTO user_role FROM public.profiles WHERE id = auth.uid();
  RETURN COALESCE(user_role, 'user');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ── Helper: is_admin ────────────────────────────────────
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

-- ── RPC: get all profiles (admin only) ─────────────────
CREATE OR REPLACE FUNCTION public.get_all_profiles_admin()
RETURNS TABLE(id uuid, full_name text, role text, created_at timestamptz, updated_at timestamptz)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT p.id, p.full_name, p.role, p.created_at, p.updated_at
  FROM public.profiles p;
$$;

-- ── RPC: update user role (admin only) ─────────────────
CREATE OR REPLACE FUNCTION public.update_user_role_admin(user_id uuid, new_role text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.profiles SET role = new_role, updated_at = now()
  WHERE id = user_id;
END;
$$;

-- ── Trigger & Function: auto-create profiles ─────────────────
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    'user'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ── Tabel: profiles ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.profiles (
  id         UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name  TEXT NOT NULL DEFAULT '',
  role       TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Admin read all profiles"
  ON public.profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admin update profiles"
  ON public.profiles FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- Tabel: galleries (Galeri Foto)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.galleries (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  url         TEXT NOT NULL,
  title       TEXT NOT NULL DEFAULT '',
  category    TEXT NOT NULL DEFAULT 'umum',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.galleries ENABLE ROW LEVEL SECURITY;

-- Public: semua orang bisa membaca
CREATE POLICY "Anyone read galleries"
  ON public.galleries FOR SELECT
  USING (true);

-- Admin: insert/update/delete
CREATE POLICY "Admin insert galleries"
  ON public.galleries FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admin update galleries"
  ON public.galleries FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admin delete galleries"
  ON public.galleries FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- Tabel: videos (Video Dokumentasi)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.videos (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  url         TEXT NOT NULL,
  title       TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  category    TEXT NOT NULL DEFAULT 'umum',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone read videos"
  ON public.videos FOR SELECT
  USING (true);

CREATE POLICY "Admin insert videos"
  ON public.videos FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admin update videos"
  ON public.videos FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admin delete videos"
  ON public.videos FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- Tabel: activities (Kegiatan)
-- ============================================================
-- Jika tabel sudah ada (skema lama), jalankan ALTER TABLE di bawah.
-- Jika tabel belum ada, CREATE TABLE akan membuat skema baru.

-- ALTER TABLE untuk migrasi dari skema lama:
-- ALTER TABLE public.activities
--   DROP COLUMN IF EXISTS subtitle,
--   DROP COLUMN IF EXISTS bg_color,
--   DROP COLUMN IF EXISTS text_color,
--   DROP COLUMN IF EXISTS border_color,
--   DROP COLUMN IF EXISTS items,
--   ADD COLUMN IF NOT EXISTS tujuan jsonb NOT NULL DEFAULT '[]'::jsonb,
--   ADD COLUMN IF NOT EXISTS kegiatan jsonb NOT NULL DEFAULT '[]'::jsonb,
--   ADD COLUMN IF NOT EXISTS mitra jsonb NOT NULL DEFAULT '[]'::jsonb,
--   ADD COLUMN IF NOT EXISTS dokumentasi jsonb NOT NULL DEFAULT '[]'::jsonb;

CREATE TABLE IF NOT EXISTS public.activities (
  id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title        TEXT NOT NULL,
  description  TEXT NOT NULL DEFAULT '',
  tujuan       JSONB NOT NULL DEFAULT '[]'::jsonb,
  kegiatan     JSONB NOT NULL DEFAULT '[]'::jsonb,
  mitra        JSONB NOT NULL DEFAULT '[]'::jsonb,
  dokumentasi  JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone read published activities"
  ON public.activities FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admin read all activities"
  ON public.activities FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admin insert activities"
  ON public.activities FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admin update activities"
  ON public.activities FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admin delete activities"
  ON public.activities FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- Tabel: materials (Materi)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.materials (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title       TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  type        TEXT NOT NULL DEFAULT 'video' CHECK (type IN ('video', 'pdf')),
  url         TEXT NOT NULL,
  category    TEXT NOT NULL DEFAULT 'umum',
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.materials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone read published materials"
  ON public.materials FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admin read all materials"
  ON public.materials FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admin insert materials"
  ON public.materials FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admin update materials"
  ON public.materials FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admin delete materials"
  ON public.materials FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- Indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_galleries_created_at ON public.galleries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_videos_created_at ON public.videos (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activities_created_at ON public.activities (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activities_published ON public.activities (is_published);
CREATE INDEX IF NOT EXISTS idx_materials_created_at ON public.materials (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_materials_published ON public.materials (is_published);
