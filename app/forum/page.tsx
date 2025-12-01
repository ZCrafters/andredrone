import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ForumCategories from "@/components/forum/forum-categories"
import ForumPosts from "@/components/forum/forum-posts"
import ForumCTA from "@/components/forum/forum-cta"

export default function ForumPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          badge="Community"
          title="JCI Community Forum"
          subtitle="Discuss drones, share tips, and connect with other JCI pilots."
        />
        <ForumCategories />
        <ForumPosts />
        <ForumCTA />
      </main>
      <Footer />
    </>
  )
}
