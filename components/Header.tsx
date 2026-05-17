'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Video', href: '/video' },
  { label: 'Kontak', href: '/kontak' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
              OG
            </div>
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
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/kontak"
              className="ml-3 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Hubungi Kami
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-foreground/70 hover:bg-primary/10"
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
        <div className="md:hidden bg-white border-t border-primary/10">
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
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/kontak"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark text-center"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
