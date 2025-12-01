"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/forum", label: "Forum" },
    { href: "/store", label: "Store" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-navy/95 backdrop-blur-md z-50 py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-2xl">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-primary">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          <span className="text-white">JCI</span>
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        <ul
          className={`md:flex gap-9 ${isOpen ? "flex absolute top-full left-0 right-0 flex-col bg-navy/98 p-5 border-b border-white/10" : "hidden"}`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium py-1 relative transition-colors ${
                  pathname === link.href ? "text-primary" : "text-gray-300 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all ${
                    pathname === link.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
