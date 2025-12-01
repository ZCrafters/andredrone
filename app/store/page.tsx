import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import AppSection from "@/components/store/app-section"
import EcommerceSection from "@/components/store/ecommerce-section"
import StoreFeatured from "@/components/store/store-featured"
import WarrantySection from "@/components/store/warranty-section"

export default function StorePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          badge="Official Store"
          title="Where to Buy JCI Drones"
          subtitle="Purchase authentic JCI products through our official app or trusted e-commerce partners. Enjoy warranty coverage and exclusive customer support."
        />
        <AppSection />
        <EcommerceSection />
        <StoreFeatured />
        <WarrantySection />
      </main>
      <Footer />
    </>
  )
}
