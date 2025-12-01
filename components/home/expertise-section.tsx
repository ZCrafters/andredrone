const expertise = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12h4M18 12h4M12 2v4M12 18v4" />
      </svg>
    ),
    title: "Aerial Photography & Cinematography",
    description:
      "Capture stunning 8K footage with our cinema-grade drones. Perfect for filmmakers, content creators, and real estate professionals.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M3 21h18M3 10h18M3 10V6a2 2 0 012-2h14a2 2 0 012 2v4M9 21V10M15 21V10" />
      </svg>
    ),
    title: "Industrial Inspection & Mapping",
    description:
      "Advanced LiDAR and thermal imaging for infrastructure inspection. Create precise 3D maps for construction and urban planning.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Agriculture & Environmental Monitoring",
    description:
      "Smart farming solutions with crop health analysis and precision spraying. Monitor environmental changes with multispectral sensors.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Security & Surveillance",
    description:
      "24/7 autonomous patrol capabilities with real-time threat detection. Secure perimeters for commercial and government applications.",
  },
]

export default function ExpertiseSection() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/15 border border-primary/30 rounded-full text-xs text-primary uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Field of Expertise</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive drone solutions across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="bg-gradient-to-br from-navy-light to-navy border border-white/10 rounded-xl p-9 text-center hover:-translate-y-1 hover:border-primary transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-primary/15 rounded-xl flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
