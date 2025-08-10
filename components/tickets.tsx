import { Button } from '@/components/ui/button'

export default function Tickets() {
  return (
    <section id="tickets" className="py-24 bg-purple-600 text-center text-white">
      <h2 className="text-4xl font-bold mb-6">Tickets</h2>
      <p className="mb-8 text-lg">
        Join us at FusionConf. Early bird tickets are available now.
      </p>
      <Button size="lg" variant="secondary">
        Buy Tickets
      </Button>
    </section>
  )
}
