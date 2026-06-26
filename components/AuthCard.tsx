"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { signIn, signUp } from "@/services/auth";

interface AuthCardProps {
  initialMode: "login" | "register";
}

export default function AuthCard({ initialMode }: AuthCardProps) {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isLogin = mode === "login";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isLogin) {
      if (password.length < 6) { setError("Kata sandi minimal 6 karakter."); return; }
      if (password !== confirmPassword) { setError("Konfirmasi kata sandi tidak cocok."); return; }
    }

    setLoading(true);
    try {
      if (isLogin) {
        const result = await signIn(email, password);
        setEmail(""); setPassword("");
        if (!result.user) { setError("Email belum dikonfirmasi."); setLoading(false); return; }
        window.location.href = result.user.user_metadata?.role === "admin" ? "/admin" : "/";
      } else {
        const result = await signUp(email, password, name);
        setEmail(""); setName(""); setPassword(""); setConfirmPassword("");
        if (result.user) {
          window.location.href = result.user.user_metadata?.role === "admin" ? "/admin" : "/";
        } else {
          router.push("/login?registered=true");
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Terjadi kesalahan";
      if (msg.includes("already registered") || msg.includes("already exists")) setError("Email sudah terdaftar.");
      else if (msg.includes("Invalid login credentials")) setError("Email atau password salah.");
      else setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl p-8 shadow-lg border border-green/10">
        <div className="flex items-center gap-2 mb-6">
          <img
            src="/logo.jpg"
            alt="Omah Gembira"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-bold text-lg text-foreground">Omah Gembira</span>
        </div>

        <h2 className="text-xl font-bold text-foreground mb-1">
          {isLogin ? "Masuk" : "Daftar"}
        </h2>
        <p className="text-sm text-foreground/50 mb-6">
          {isLogin ? (
            <>Belum punya akun? <button onClick={() => setMode("register")} className="text-green font-medium hover:underline">Daftar</button></>
          ) : (
            <>Sudah punya akun? <button onClick={() => setMode("login")} className="text-green font-medium hover:underline">Masuk</button></>
          )}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-foreground/70 mb-1">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@omahgembira.org"
              className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground" />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-1">Nama Lengkap</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Nisa Aulia"
                className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground" />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-foreground/70 mb-1">Kata Sandi</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} required value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                className="w-full px-4 py-2.5 pr-10 rounded-xl border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground" />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground/60">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-1">Konfirmasi Kata Sandi</label>
              <div className="relative">
                <input type={showConfirm ? "text" : "password"} required value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••"
                  className="w-full px-4 py-2.5 pr-10 rounded-xl border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground" />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground/60">
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

          <button type="submit" disabled={loading}
            className="w-full py-2.5 rounded-xl bg-charcoal text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50">
            {loading ? "Memproses..." : isLogin ? "Masuk" : "Daftar"}
          </button>
        </form>

        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-foreground/10" /></div>
          <div className="relative flex justify-center text-xs"><span className="bg-white px-3 text-foreground/30">atau lanjutkan dengan</span></div>
        </div>

        <button onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-2 border border-foreground/10 bg-white hover:bg-foreground/5 text-foreground py-2 rounded-xl transition-colors text-sm font-medium">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.96 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.6 2.8C6.01 7.14 8.74 5.04 12 5.04z"/>
            <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.42 3.57l3.69 2.86c2.16-1.99 3.42-4.92 3.42-8.58z"/>
            <path fill="#FBBC05" d="M5.1 14.7c-.25-.75-.39-1.55-.39-2.37s.14-1.62.39-2.37l-3.6-2.8C.54 8.86 0 10.37 0 12s.54 3.14 1.5 4.67l3.6-2.97z"/>
            <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.92l-3.69-2.86c-1.12.75-2.55 1.2-4.27 1.2-3.26 0-5.99-2.1-6.98-5.26l-3.6 2.8C3.4 20.35 7.35 23 12 23z"/>
          </svg>
          Google
        </button>

        <Link href="/" className="block text-center text-sm text-foreground/40 hover:text-green mt-5 transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
