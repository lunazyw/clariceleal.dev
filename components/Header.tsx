import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Clarice Leal</Link>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="hover:text-secondary-foreground transition-colors">About</Link></li>
          <li><Link href="#projects" className="hover:text-secondary-foreground transition-colors">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-secondary-foreground transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

