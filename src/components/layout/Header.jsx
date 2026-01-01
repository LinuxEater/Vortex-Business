import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-100 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-lg font-semibold text-primary">
          Vertex Labs
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="text-slate-700 dark:text-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700 dark:text-slate-300">
          <a href="#sobre" className="hover:text-primary transition">
            Sobre
          </a>
          <a href="#projetos" className="hover:text-primary transition">
            Projetos
          </a>
          <a href="#stack" className="hover:text-primary transition">
            Stack
          </a>
          <a
            href="#contato"
            className="px-5 py-2 rounded-lg bg-primary text-white hover:shadow-lg transition"
          >
            Contato
          </a>
        </nav>

      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur z-50 flex flex-col items-center justify-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-slate-700 dark:text-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-8 text-xl font-medium text-slate-700 dark:text-slate-300">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">
              Sobre
            </a>
            <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">
              Projetos
            </a>
            <a href="#stack" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">
              Stack
            </a>
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-3 rounded-lg bg-primary text-white hover:shadow-lg transition mt-4"
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
