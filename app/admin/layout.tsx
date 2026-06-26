"use client";

import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut } from "lucide-react";
import AdminGuard from "@/components/AdminGuard";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin" },
  { label: "Kelola Kegiatan", href: "/admin/kegiatan" },
  { label: "Kelola Materi", href: "/admin/materi" },
  { label: "Kelola Galeri", href: "/admin/galeri" },
  { label: "Kelola Video", href: "/admin/video" },
  { label: "Kelola Admin", href: "/admin/users" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();

  const displayName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Admin";

  return (
    <AdminGuard>
      <div className="flex min-h-screen bg-background">
        <aside className="w-64 bg-charcoal text-white flex flex-col justify-between shrink-0">
          <div className="p-5">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-3 mb-8"
            >
              <img
                src="/logo.jpg"
                alt="Omah Gembira"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-bold text-lg">Omah Gembira</span>
            </button>

            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                return (
                  <button
                    key={item.href}
                    onClick={() => router.push(item.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                      isActive
                        ? "bg-green text-charcoal"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-5 border-t border-white/10">
            <div className="flex items-center gap-3 min-w-0 mb-3">
              <div className="w-9 h-9 rounded-full bg-green/20 flex items-center justify-center text-green text-sm font-bold shrink-0">
                {displayName.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">{displayName}</p>
                <p className="text-xs text-white/40">Admin</p>
              </div>
            </div>
            <button
              onClick={async () => {
                await signOut();
                window.location.href = "/";
              }}
              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Keluar
            </button>
          </div>
        </aside>

        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </AdminGuard>
  );
}
