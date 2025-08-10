import Hero from '@/components/hero'
import About from '@/components/about'
import Speakers from '@/components/speakers'
import Sessions from '@/components/sessions'
import Venue from '@/components/venue'
import Sponsors from '@/components/sponsors'
import Tickets from '@/components/tickets'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Sessions />
        <Venue />
        <Sponsors />
        <Tickets />
      </main>
      <Footer />
    </>
  )
}
