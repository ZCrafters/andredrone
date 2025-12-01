const awards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-yellow-500">
        <path d="M12 15l-2 5-1.5-1.5M12 15l2 5 1.5-1.5M12 15V9" />
        <circle cx="12" cy="6" r="3" />
        <path d="M6.5 11L4 12.5l1 3M17.5 11l2.5 1.5-1 3" />
      </svg>
    ),
    title: "Best Industrial Drone 2024",
    issuer: "Asia Tech Expo",
    description: "Recognized for outstanding performance in industrial applications",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-yellow-500">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Innovation Excellence Award",
    issuer: "Global Drone Summit",
    description: "Pioneering AI-powered flight control systems",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-yellow-500">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
    title: "Top Consumer Choice 2024",
    issuer: "TechReview Magazine",
    description: "Voted best value drone for photography enthusiasts",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-yellow-500">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Safety & Reliability Award",
    issuer: "Aviation Standards Board",
    description: "Highest safety ratings in autonomous flight category",
  },
]

export default function AwardsSection() {
  return (
    <section className="py-24 bg-navy-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/15 border border-primary/30 rounded-full text-xs text-primary uppercase tracking-wider mb-4">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">JCI Innovation Awards</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Recognized globally for excellence in drone technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className="bg-navy border border-white/10 rounded-xl p-8 text-center hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/15 transition-all"
            >
              <div className="mb-4 flex justify-center">{award.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{award.title}</h3>
              <p className="text-sm text-primary mb-3">{award.issuer}</p>
              <p className="text-sm text-gray-500">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
