import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Hero from './components/Hero'
import Services from './components/Services'
import Partners from './components/Partners'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Partners />
      <Contact />
      <Portfolio />
    </main>
  )
}
