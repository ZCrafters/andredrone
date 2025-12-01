import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark to-navy-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Take Flight?</h2>
          <p className="text-lg text-white/80 mb-8">
            Join thousands of pilots who trust JCI drones for their aerial missions. From hobbyists to professionals, we
            have the perfect drone for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Browse All Products
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-primary hover:bg-primary transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
