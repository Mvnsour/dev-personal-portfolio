import { Button } from '@/components/Button'
import { MenuIcon, X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scoll', handleScroll);
  }, [])


  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500
    ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'} z-50`}>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'>
          <span className='text-primary pr-2'>&lt;</span>
            MM
          <span className='text-primary pl-2'>/ &gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link: NavLink, index: number) => 
              <a
              key={index} 
              href={link.href} 
              className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'
              >
                {link.label}
              </a>
            )}
          </div>
        </div>

        {/* CTA button */}
        <div className='hidden md:block'>
          <Button size='sm' >Contact Me</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className='md:hidden px-2 text-foreground cursor-pointer'
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24}/>}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
      <div className='md:hidden mt-2 glass-strong'>
        <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
          {navLinks.map((link: NavLink, index: number) =>
              <a
              key={index}
              href={link.href}
              className='text-lg text-muted-foreground hover:text-foreground py-2'
              >
                {link.label}
              </a>
            )}
            <Button>Contact Me</Button>
        </div>
      </div>
    )}
    </header>
  )
}