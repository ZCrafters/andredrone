import Link from "next/link"

export default function ForumCTA() {
  return (
    <section className="py-16 bg-navy">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center p-12 bg-gradient-to-br from-primary-dark to-navy-light rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Want to Join the Discussion?</h2>
          <p className="text-white/80 mb-6">Create an account to post, comment, and connect with other JCI pilots.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Create Account
            </Link>
            <Link
              href="#"
              className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-primary hover:bg-primary transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
