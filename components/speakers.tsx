import { contentfulClient } from '@/lib/contentful'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image'

async function getSpeakers() {
  const res = await contentfulClient.getEntries({ content_type: 'speaker' })
  return res.items as any[]
}

export default async function Speakers() {
  const speakers = await getSpeakers()
  return (
    <section id="speakers" className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Speakers</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {speakers.map((s) => (
            <Card key={s.sys.id} className="overflow-hidden text-center">
              {s.fields.photo && (
                <Image
                  src={`https:${s.fields.photo.fields.file.url}`}
                  alt={s.fields.name}
                  width={400}
                  height={400}
                  className="h-48 w-full object-cover"
                />
              )}
              <CardHeader>
                <CardTitle>{s.fields.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{s.fields.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
