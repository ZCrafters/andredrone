import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl mb-2.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6 text-primary"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              <span className="text-white">JCI</span>
            </Link>
            <p className="text-gray-500 text-sm mb-4">Jakarta Cyber Innovations</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering the future of aerial intelligence with cutting-edge drone technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Forum", href: "/forum" },
                { label: "Store", href: "/store" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-500 text-sm hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Support</h4>
            <ul className="flex flex-col gap-3">
              {["Privacy Policy", "Terms of Service", "Support Center", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <p className="text-gray-500 text-sm mb-2">Jakarta, Indonesia</p>
            <p className="text-gray-500 text-sm mb-2">support@jci-drones.com</p>
            <p className="text-gray-500 text-sm">+62 21 1234 5678</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2025 JCI &ndash; Jakarta Cyber Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
