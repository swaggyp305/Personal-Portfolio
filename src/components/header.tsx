"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-4xl px-6 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold text-slate-900">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 md:flex">
            <Link
              href="/"
              className="text-slate-600 transition-colors hover:text-slate-900"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-slate-600 transition-colors hover:text-slate-900"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-slate-600 transition-colors hover:text-slate-900"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 md:hidden">
            <Link
              href="/"
              className="text-slate-600 transition-colors hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-slate-600 transition-colors hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-slate-600 transition-colors hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
