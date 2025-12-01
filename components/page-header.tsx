interface PageHeaderProps {
  badge: string
  title: string
  subtitle: string
}

export default function PageHeader({ badge, title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-36 pb-20 text-center bg-gradient-to-b from-navy to-navy-light">
      <div className="max-w-7xl mx-auto px-5">
        <span className="inline-block px-4 py-1.5 bg-primary/15 border border-primary/30 rounded-full text-xs text-primary uppercase tracking-wider mb-4">
          {badge}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}
