import { contentfulClient } from '@/lib/contentful'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

async function getSpeakers() {
  const res = await contentfulClient.getEntries({ content_type: 'speaker' })
  return res.items as any[]
}

export default async function Speakers() {
  const speakers = await getSpeakers()
  return (
    <section id="speakers" className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Speakers</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {speakers.map((s) => (
          <Card key={s.sys.id}>
            <CardHeader>
              <CardTitle>{s.fields.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{s.fields.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
