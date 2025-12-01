export default function WarrantySection() {
  return (
    <section className="py-12 bg-navy">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
          <div className="text-5xl">🛡️</div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2 text-white">Official Warranty Guarantee</h3>
            <p className="text-gray-400">
              All JCI products purchased through official channels include a 2-year manufacturer warranty, free firmware
              updates, and access to priority customer support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
