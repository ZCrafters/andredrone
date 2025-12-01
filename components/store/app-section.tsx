export default function AppSection() {
  return (
    <section className="py-20 bg-navy-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:text-left text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/15 border border-primary/30 rounded-full text-xs text-primary uppercase tracking-wider mb-4">
              Official App
            </span>
            <h2 className="text-3xl font-bold mb-5 text-white">JCI Official App</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Download the JCI app for the best shopping experience. Get exclusive app-only deals, manage your drones,
              access flight logs, and receive firmware updates directly on your mobile device.
            </p>

            <ul className="mb-8 space-y-2">
              {[
                "Exclusive app-only discounts",
                "Direct customer support chat",
                "Manage all your JCI devices",
                "Access flight data and maps",
                "One-click firmware updates",
              ].map((feature) => (
                <li key={feature} className="text-gray-300 text-sm flex items-center gap-2">
                  <span className="text-primary">&#10003;</span> {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3 bg-navy border border-white/20 rounded-xl hover:border-primary hover:bg-navy-lighter transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                </svg>
                <div className="text-left">
                  <span className="block text-xs text-gray-500 uppercase">GET IT ON</span>
                  <span className="font-semibold text-white">Google Play</span>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3 bg-navy border border-white/20 rounded-xl hover:border-primary hover:bg-navy-lighter transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className="text-left">
                  <span className="block text-xs text-gray-500 uppercase">Download on the</span>
                  <span className="font-semibold text-white">App Store</span>
                </div>
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/mobile-app-drone-control-interface-smartphone-mock.jpg"
              alt="JCI Mobile App"
              width={280}
              height={500}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
