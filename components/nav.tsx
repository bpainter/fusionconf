import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#sessions', label: 'Sessions' },
  { href: '#venue', label: 'Venue' },
  { href: '#sponsors', label: 'Sponsors' }
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="#hero" className="font-bold text-xl">
          FusionConf
        </Link>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="#tickets">Tickets</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="p-4">
            <Button asChild className="w-full" onClick={() => setOpen(false)}>
              <Link href="#tickets">Tickets</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
