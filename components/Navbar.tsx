import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <div className='h-12 border-b-2 px-4 '>
      <nav className='h-full flex items-center justify-between container mx-auto px-4'>
        <Link href='/'>
      <h1 className="text-2xl font-bold ">@Salon Meblowy</h1>
        </Link>
      <ul className='flex items-center gap-4 max-lg:hidden'>
        <Link className='' href='contact'>Porozmawiajmy</Link>
        <Link className='' href='about'>O nas</Link>
        <Link className='' href='products'>Produkty</Link>
        <Link href='cart'><ShoppingCart/></Link>
        </ul>   
        <div className=' lg:hidden'>
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}

export default Navbar