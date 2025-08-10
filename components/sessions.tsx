import { contentfulClient } from '@/lib/contentful'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

async function getSessions() {
  const res = await contentfulClient.getEntries({ content_type: 'session' })
  return res.items as any[]
}

export default async function Sessions() {
  const sessions = await getSessions()
  return (
    <section id="sessions" className="py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Sessions</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {sessions.map((session) => (
            <Card key={session.sys.id}>
              <CardHeader>
                <CardTitle>{session.fields.title}</CardTitle>
                {session.fields.speaker && (
                  <p className="text-sm text-gray-500">{session.fields.speaker}</p>
                )}
              </CardHeader>
              <CardContent>
                {session.fields.time && (
                  <p className="font-medium mb-2">{session.fields.time}</p>
                )}
                <p>{session.fields.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
