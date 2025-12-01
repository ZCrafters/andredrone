import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(14,165,233,0.15)_0%,transparent_60%)]" />
        {/* Particles */}
        <div className="absolute inset-0">
          {[10, 20, 40, 70, 90].map((left, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-pulse"
              style={{ left: `${left}%`, top: `${20 + i * 15}%`, animationDelay: `${i * 3}s` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="lg:max-w-xl">
          <div className="inline-block px-4 py-2 bg-primary/15 border border-primary/30 rounded-full text-sm text-primary mb-5">
            Next-Gen Drone Technology
          </div>

          <h1 className="mb-5">
            <span className="block text-5xl md:text-7xl font-extrabold bg-gradient-to-br from-white to-primary-light bg-clip-text text-transparent leading-tight">
              JCI
            </span>
            <span className="block text-lg md:text-xl text-gray-400 mt-2">Jakarta Cyber Innovations</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-primary italic mb-5">
            &quot;Empowering the future of aerial intelligence&quot;
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Leading drone innovation for mapping, filming, security, and delivery. JCI delivers cutting-edge aerial
            solutions that transform industries and push the boundaries of what&apos;s possible in the sky.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Explore Products
            </Link>
            <Link
              href="/store"
              className="px-6 py-3 bg-navy-light text-white font-semibold rounded-lg border border-gray-600 hover:bg-navy-lighter hover:border-primary transition-all"
            >
              Visit Store
            </Link>
          </div>
        </div>

        {/* Visual - using placeholder image with proper format */}
        <div className="relative">
          <div className="relative flex justify-center">
            <img
              src="/professional-drone-flying-in-blue-sky-with-city-ba.jpg"
              alt="JCI Professional Drone"
              width={500}
              height={400}
              className="relative z-10 rounded-2xl animate-[hover_4s_ease-in-out_infinite]"
            />
            <div className="absolute inset-[20%] bg-[radial-gradient(ellipse,rgba(14,165,233,0.4),transparent)] blur-[40px] z-0" />
          </div>

          <div className="flex justify-center gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { number: "50+", label: "Drone Models" },
              { number: "100K+", label: "Happy Pilots" },
              { number: "45min", label: "Max Flight" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-primary">{stat.number}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
