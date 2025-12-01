import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactSection from "@/components/contact/contact-section"
import FAQSection from "@/components/contact/faq-section"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          badge="Get In Touch"
          title="Contact JCI Support"
          subtitle="Our dedicated support team is here to help with product questions, technical issues, warranty claims, and partnership inquiries."
        />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
