import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import SocialLinks from "@/components/SocialLinks"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  )
}
