import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-12 border-b-2 px-4'>
      <nav className='h-full flex items-center justify-between container mx-auto px-4'>
      <h1 className="text-2xl font-bold ">@Salon Meblowy</h1>
      <ul className='flex items-center gap-4'>
        <Link href='contact'>Porozmawiajmy</Link>
        <Link href='about'>O nas</Link>
        <Link href='products'>Produkty</Link>
        </ul>   
      </nav>
    </div>
  )
}

export default Navbar