'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Materi', href: '/materi' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Video', href: '/video' },
  { label: 'Kontak', href: '/kontak' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { user } = useAuth()

  const isAdmin = user?.user_metadata?.role === 'admin'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="Omah Gembira"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold text-lg text-foreground hidden sm:block">
              Omah Gembira
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-charcoal bg-green-bg'
                      : 'text-foreground/70 hover:text-green hover:bg-green-bg'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/kontak"
              className="ml-3 px-4 py-2 rounded-full bg-charcoal text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              Hubungi Kami
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className="ml-1 px-4 py-2 rounded-full bg-green text-charcoal text-sm font-semibold hover:opacity-90 transition-all"
              >
                Admin
              </Link>
            )}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-foreground/70 hover:bg-green-bg"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-green/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-charcoal bg-green-bg'
                      : 'text-foreground/70 hover:text-green hover:bg-green-bg'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/kontak"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded-full bg-charcoal text-white text-sm font-semibold hover:opacity-90 text-center"
            >
              Hubungi Kami
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 rounded-full bg-green text-charcoal text-sm font-semibold hover:opacity-90 text-center"
              >
                Admin
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
