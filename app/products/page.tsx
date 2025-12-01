import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ProductFilter from "@/components/products/product-filter"
import ProductsGrid from "@/components/products/products-grid"
import CompareSection from "@/components/products/compare-section"

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          badge="Our Products"
          title="JCI Drone Collection"
          subtitle="Explore our complete range of professional and consumer drones"
        />
        <ProductFilter />
        <ProductsGrid />
        <CompareSection />
      </main>
      <Footer />
    </>
  )
}
