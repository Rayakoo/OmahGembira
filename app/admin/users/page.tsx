"use client";

import { useState, useEffect } from "react";
import { Shield, ShieldOff, Loader2, Search } from "lucide-react";
import { getProfiles, updateUserRole, type Profile } from "@/services/auth";

export default function AdminUsersPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProfiles()
      .then(setProfiles)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const q = search.toLowerCase().trim();
  const filtered = profiles.filter((p) => {
    if (!q) return true;
    return p.full_name?.toLowerCase().includes(q) || p.id.toLowerCase().includes(q);
  });

  const admins = filtered.filter((p) => p.role === "admin");
  const users = filtered.filter((p) => p.role !== "admin");

  const toggleRole = async (profile: Profile) => {
    const newRole = profile.role === "admin" ? "user" : "admin";
    const action = newRole === "admin" ? "menjadikan admin" : "mencabut admin";
    if (!window.confirm(`Yakin ingin ${action} "${profile.full_name || profile.id}"?`)) return;

    setUpdating(profile.id);
    try {
      await updateUserRole(profile.id, newRole);
      setProfiles((prev) => prev.map((p) => (p.id === profile.id ? { ...p, role: newRole } : p)));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Gagal mengubah role");
    } finally {
      setUpdating(null);
    }
  };

  const renderTable = (title: string, data: Profile[], badgeColor: string) => (
    <div className="mb-6 last:mb-0">
      <h2 className="text-lg font-bold text-foreground mb-3">{title} ({data.length})</h2>
      <div className="bg-white border border-foreground/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-foreground/5">
                <th className="p-5 text-sm font-bold text-foreground">Nama</th>
                <th className="p-5 text-sm font-bold text-foreground">ID User</th>
                <th className="p-5 text-sm font-bold text-foreground">Role</th>
                <th className="p-5 text-sm font-bold text-foreground text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {data.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-sm text-foreground/40">
                    {search ? "Tidak ada user yang cocok." : "Tidak ada data."}
                  </td>
                </tr>
              ) : (
                data.map((p) => (
                  <tr key={p.id} className="hover:bg-green-bg/50 transition-colors">
                    <td className="p-5 text-sm font-medium text-foreground">{p.full_name || "(tanpa nama)"}</td>
                    <td className="p-5 text-sm text-foreground/50 font-mono">{p.id.slice(0, 8)}...</td>
                    <td className="p-5">
                      <span className={`inline-block px-3 py-1 text-xs font-bold text-white rounded-full ${badgeColor}`}>
                        {p.role}
                      </span>
                    </td>
                    <td className="p-5 text-center">
                      <button
                        onClick={() => toggleRole(p)}
                        disabled={updating === p.id}
                        className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                          p.role === "admin"
                            ? "text-red-500 bg-red-50 hover:bg-red-100 border border-red-200"
                            : "text-charcoal bg-green-bg hover:bg-green-bg/80 border border-green/20"
                        }`}
                      >
                        {updating === p.id ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : p.role === "admin" ? (
                          <ShieldOff className="w-3.5 h-3.5" />
                        ) : (
                          <Shield className="w-3.5 h-3.5" />
                        )}
                        {p.role === "admin" ? "Cabut Admin" : "Jadikan Admin"}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Kelola Admin</h1>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari user..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green/20 text-sm text-foreground placeholder-foreground/30"
          />
        </div>
        <span className="text-xs text-foreground/40">{filtered.length} / {profiles.length} user</span>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-green border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <>
          {renderTable("Admin", admins, "bg-charcoal")}
          {renderTable("User", users, "bg-foreground/40")}
        </>
      )}
    </div>
  );
}
