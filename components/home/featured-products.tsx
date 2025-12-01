import Link from "next/link"

const products = [
  {
    name: "JCI SkyVision Pro X5",
    description:
      "Professional-grade 8K camera drone with 45-minute flight time. Perfect for cinematographers and aerial photographers.",
    badge: "Best Seller",
    image: "/professional-8k-camera-drone-white-background.jpg",
  },
  {
    name: "JCI IndustrialMapper M3",
    description:
      "Enterprise mapping drone with LiDAR and thermal sensors. Build precise 3D models for construction and inspection.",
    badge: "New",
    image: "/industrial-mapping-drone-with-sensors-white-backgr.jpg",
  },
  {
    name: "JCI Compact Traveler",
    description:
      "Ultra-portable foldable drone weighing just 249g. 4K camera with intelligent tracking for travel enthusiasts.",
    badge: "Popular",
    image: "/compact-foldable-travel-drone-white-background.jpg",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-navy-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/15 border border-primary/30 rounded-full text-xs text-primary uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured JCI Drone Products</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Discover our most popular drone solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-navy border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/15 transition-all group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={350}
                  height={220}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-white text-xs font-semibold uppercase rounded-md">
                  {product.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">{product.description}</p>
                <Link
                  href="/store"
                  className="inline-block px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  View in Store
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
