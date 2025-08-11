import { useEffect, useState } from 'react';
import { ModeToggle } from '../mode-toggle';
import { cn } from '@/lib/utils';


export default function NavBar() {

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <nav className={cn('fixed top-0 w-full transition-all duration-500', scrollY > 70 && 'backdrop-blur-2xl bg-background/30 border-b-border border-[1px]')}>
      <div className='max-w-5xl flex justify-between items-center mx-auto px-8 py-6'>
        <h2 className='text-lg font-medium'>Wes Isaac</h2>
        <div className='hidden md:flex justify-center items-center gap-20'>

          <ul className='hidden md:flex justify-center items-center gap-5 text-sm text-muted-foreground '>
            <li className='hover:text-foreground hover:cursor-pointer transition-colors duration-300'>
              <a href="#about">
                About
              </a>
            </li>
            <li className='hover:text-foreground hover:cursor-pointer transition-colors duration-300'>
              <a href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <ModeToggle />
        </div>
        <div className='md:hidden flex items-center gap-4'>
          <ModeToggle />
        </div>
      </div>

    </nav>
  )
}