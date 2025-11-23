import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          {/* Links */}
          <div className="flex gap-6">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:your-email@example.com"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Email
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-600">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
