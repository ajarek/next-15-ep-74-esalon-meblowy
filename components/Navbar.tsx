import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <div className='max-w-7xl mx-auto file:h-12 border-b-2 px-4 fixed top-0 w-full z-10 bg-background'>
      <nav className='h-full flex items-center justify-between container mx-auto px-4'>
        <Link aria-label='Stron Główna' href='/'>
      <h1 className="text-2xl font-bold ">@Salon Meblowy</h1>
        </Link>
      <ul className='flex items-center gap-4 max-lg:hidden'>
        <Link aria-label='Porozmawiajmy' className='' href='/contact'>Porozmawiajmy</Link>
        <Link aria-label='O nas' className='' href='/about'>O nas</Link>
        <Link aria-label='Produkty' className='' href='/products'>Produkty</Link>
        <Link aria-label='Koszyk' href='/cart'><ShoppingCart/></Link>
        </ul>   
        <div className=' lg:hidden'>
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}

export default Navbar