import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-purple-600 to-pink-600 text-white"
    >
      <div className="text-center px-4">
        <h1 className="text-6xl font-extrabold tracking-tight">FusionConf 2025</h1>
        <p className="mt-6 text-2xl">The future of web and design</p>
        <p className="mt-2 text-lg">August 25–27 · Raleigh, NC</p>
        <div className="mt-8">
          <Button asChild size="lg" variant="secondary">
            <a href="#tickets">Get Tickets</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
