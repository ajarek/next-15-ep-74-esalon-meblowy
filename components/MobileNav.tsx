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
          aria-describedby='mobile-nav'
        >
          <SheetTitle className='text-xl font-semibold uppercase italic '>
            <Link href='/' aria-label='Stron Główna'>@Salon Meblowy</Link>
          </SheetTitle>
          <div className='flex flex-col gap-4 mt-4 '>
            <Link aria-label='Porozmawiajmy' href='contact'>Porozmawiajmy</Link>
            <Link aria-label='O nas' href='about'>O nas</Link>
            <Link aria-label='Produkty' href='products'>Produkty</Link>
            <Link aria-label='Koszyk' href='cart'>
              <ShoppingCart />
            </Link>
          </div>
        </SheetContent>
      </SheetClose>
    </Sheet>
  )
}

export default MobileNav
