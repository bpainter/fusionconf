import Link from 'next/link'
import { Button } from '@/components/ui/button'

const links = [
  { href: '#about', label: 'About' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#sessions', label: 'Sessions' },
  { href: '#venue', label: 'Venue' },
  { href: '#sponsors', label: 'Sponsors' }
]

export default function Nav() {
  return (
    <nav className="p-4 flex justify-between items-center border-b">
      <Link href="#hero" className="font-bold text-xl">FusionConf</Link>
      <div className="hidden md:flex space-x-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        ))}
      </div>
      <Button asChild>
        <Link href="#tickets">Tickets</Link>
      </Button>
    </nav>
  )
}
