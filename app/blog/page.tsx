import Navigation from "@/components/common/navigation"
import Footer from "@/components/common/footer"
import BlogHero from "@/components/blog/blog-hero"
import BlogCards from "@/components/blog/blog-cards"
import MorePosts from "@/components/blog/more-posts"

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <BlogHero />
        <BlogCards />
        <MorePosts />
      </main>
      <Footer />
    </div>
  )
}