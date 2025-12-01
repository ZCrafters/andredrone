import Link from "next/link"

export default function CompareSection() {
  return (
    <section className="py-16 bg-navy">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center p-12 bg-gradient-to-br from-navy-light to-navy border border-white/10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Not Sure Which Drone is Right for You?</h2>
          <p className="text-gray-400 mb-6">Our team of experts can help you find the perfect drone for your needs.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Contact Our Experts
          </Link>
        </div>
      </div>
    </section>
  )
}
