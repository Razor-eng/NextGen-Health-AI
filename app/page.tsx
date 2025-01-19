import Hero from '@/components/hero'
import ProblemSolutionStrip from '@/components/problem-solution-strip'
import About from '@/components/about'
import Problems from '@/components/problems'
import Solutions from '@/components/solutions'
import Technology from '@/components/technology'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolutionStrip />
      <About />
      <Problems />
      <Solutions />
      <Technology />
      <Contact />
      <Footer />
    </main>
  )
}