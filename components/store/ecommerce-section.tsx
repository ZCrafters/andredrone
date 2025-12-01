const stores = [
  { name: "Tokopedia", region: "Available in Indonesia", note: "Official JCI Store with free shipping" },
  { name: "Shopee", region: "Available in Southeast Asia", note: "Flash deals and vouchers available" },
  { name: "Lazada", region: "Available in Southeast Asia", note: "Express delivery options" },
  { name: "Amazon", region: "Available Worldwide", note: "Prime shipping in select countries" },
  { name: "Blibli", region: "Available in Indonesia", note: "0% installment options" },
  { name: "Bukalapak", region: "Available in Indonesia", note: "BukaMall verified seller" },
]

export default function EcommerceSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/15 border border-primary/30 rounded-full text-xs text-primary uppercase tracking-wider mb-4">
            Official Partners
          </span>
          <h2 className="text-3xl font-bold mb-4 text-white">Official E-Commerce Stores</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Shop JCI products on your favorite e-commerce platforms. All partner stores offer authentic products with
            full warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div
              key={store.name}
              className="bg-navy-light border border-white/10 rounded-xl p-8 text-center hover:border-primary hover:-translate-y-1 transition-all"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img
                  src={`/.jpg?height=60&width=120&query=${store.name} ecommerce logo`}
                  alt={store.name}
                  width={120}
                  height={60}
                  className="max-h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{store.name}</h3>
              <p className="text-sm text-primary mb-2">{store.region}</p>
              <p className="text-sm text-gray-500 mb-5">{store.note}</p>
              <a
                href="#"
                className="inline-block px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Visit Store
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
