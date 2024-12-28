'use client'

import { Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'


const MobileNav = () => {
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetClose asChild>
      <SheetContent
        side='left'
        className='border-none bg-card text-card-foreground  shadow-none lg:hidden '
      >
         
        <SheetTitle className='text-xl font-semibold uppercase italic '>
          <Link href='/'>@Salon Meblowy</Link>
        </SheetTitle>
        <div className='flex flex-col gap-4 mt-4 '>
          
        <Link href='contact'>Porozmawiajmy</Link>
        <Link href='about'>O nas</Link>
        <Link href='products'>Produkty</Link>
        <Link href='cart'><ShoppingCart /></Link>
        </div>
      </SheetContent>
        </SheetClose>
    </Sheet>
  )
}

export default MobileNav