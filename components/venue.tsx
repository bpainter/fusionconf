export default function Venue() {
  return (
    <section id="venue" className="py-24">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6">Venue</h2>
        <p className="mb-8 text-lg text-gray-700">
          The conference will be held at the Downtown Conference Center in Raleigh, NC.
        </p>
        <iframe
          className="w-full h-64 rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9727348773867!2d-78.64398522374765!3d35.778401623989045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5ef3df15baed%3A0xf69de0324ed072d0!2sRaleigh%20Convention%20Center!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
