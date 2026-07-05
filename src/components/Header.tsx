'use client';

import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 backdrop-blur-glass border-b border-cream-beige dark:border-dark-border bg-warm-white/80 dark:bg-dark-bg/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-playfair font-bold text-gradient">
            belajar IT bagi yang ndak sempet masuk IT
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-rose transition-colors">
            Dashboard
          </Link>
          <Link href="/certifications" className="text-sm font-medium hover:text-rose transition-colors">
            Certifications
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-cream-beige dark:hover:bg-dark-card transition-colors duration-200 text-sm font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ThemeToggle />
        </div>
      </div>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-cream-beige dark:border-dark-border bg-warm-white dark:bg-dark-bg shadow-soft-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 md:hidden">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-accent dark:text-dark-text hover:text-rose transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-accent dark:text-dark-text hover:text-rose transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/certifications"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-accent dark:text-dark-text hover:text-rose transition-colors"
            >
              Certifications
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="w-full text-left text-sm font-medium text-accent dark:text-dark-text hover:text-rose transition-colors"
            >
              Keluar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
