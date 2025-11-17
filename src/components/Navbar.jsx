import { useState } from 'react'
import { Menu, X, Star } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-sm">
          <div className="flex items-center justify-between py-3 px-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-white" />
              </div>
              <span className="font-semibold text-gray-900 tracking-tight">Loyalino</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white text-sm font-medium px-4 py-2 hover:bg-gray-800 transition-colors"
              >
                <Star size={16} className="text-yellow-300" />
                Add to Shopify
              </a>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-gray-100 px-4 py-3">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-sm py-2">
                    {item.label}
                  </a>
                ))}
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white text-sm font-medium px-4 py-2"
                >
                  <Star size={16} className="text-yellow-300" />
                  Add to Shopify
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
