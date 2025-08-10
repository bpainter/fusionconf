const sponsors = [
  { name: 'Acme Corp' },
  { name: 'Globex' },
  { name: 'Initech' },
  { name: 'Umbrella' }
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Sponsors</h2>
        <p className="text-gray-700">
          Thanks to our amazing sponsors for making this event possible.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 items-center">
          {sponsors.map((s) => (
            <div key={s.name} className="text-xl font-semibold text-gray-500">
              {s.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
