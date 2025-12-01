const products = [
  {
    name: "JCI SkyVision Pro X5",
    specs: ["8K Camera", "45min Flight", "15km Range"],
    price: "$2,499",
    originalPrice: "$2,799",
    badge: "Best Seller",
    badgeColor: "bg-primary",
    image: "/professional-camera-drone-8k.jpg",
  },
  {
    name: "JCI Compact Traveler",
    specs: ["4K HDR", "34min Flight", "249g"],
    price: "$699",
    originalPrice: "$849",
    badge: "Sale",
    badgeColor: "bg-red-500",
    image: "/compact-foldable-travel-drone.jpg",
  },
  {
    name: "JCI RaceBolt FPV",
    specs: ["140km/h", "4K 120fps", "Goggles Inc."],
    price: "$1,299",
    originalPrice: null,
    badge: "New",
    badgeColor: "bg-green-500",
    image: "/fpv-racing-drone-with-goggles.jpg",
  },
  {
    name: "JCI MiniPilot",
    specs: ["1080p", "20min Flight", "Beginner"],
    price: "$149",
    originalPrice: "$199",
    badge: "Popular",
    badgeColor: "bg-primary",
    image: "/mini-beginner-drone-for-kids.jpg",
  },
]

export default function StoreFeatured() {
  return (
    <section className="py-20 bg-navy-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/15 border border-primary/30 rounded-full text-xs text-primary uppercase tracking-wider mb-4">
            Best Sellers
          </span>
          <h2 className="text-3xl font-bold mb-4 text-white">Featured Store Products</h2>
          <p className="text-gray-400">Our most popular drones available now</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-navy border border-white/10 rounded-xl overflow-hidden hover:border-primary hover:-translate-y-1 transition-all"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={180}
                  className="w-full h-44 object-cover"
                />
                <span
                  className={`absolute top-3 left-3 px-2.5 py-1 ${product.badgeColor} text-white text-xs font-semibold uppercase rounded`}
                >
                  {product.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-3 text-white">{product.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec) => (
                    <span key={spec} className="text-xs text-gray-500 px-2 py-1 bg-white/5 rounded">
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-600 line-through ml-2">{product.originalPrice}</span>
                  )}
                </div>
                <a
                  href="#"
                  className="block w-full py-2.5 bg-primary text-white font-semibold rounded-lg text-center hover:bg-primary-dark transition-colors"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
