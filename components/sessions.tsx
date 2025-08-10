import { contentfulClient } from '@/lib/contentful'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

async function getSessions() {
  const res = await contentfulClient.getEntries({ content_type: 'session' })
  return res.items as any[]
}

export default async function Sessions() {
  const sessions = await getSessions()
  return (
    <section id="sessions" className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Sessions</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {sessions.map((session) => (
          <Card key={session.sys.id}>
            <CardHeader>
              <CardTitle>{session.fields.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{session.fields.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
