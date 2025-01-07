'use client'

import { Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'

const MobileNav = () => {
  const { items } = useCartStore()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetClose asChild>
        <SheetContent
          side='left'
          className='border-none bg-background text-foreground  shadow-none lg:hidden '
          aria-describedby='mobile-nav'
        >
          <SheetTitle className='text-xl font-semibold uppercase italic '>
            <Link
              href='/'
              aria-label='Stron Główna'
            >
              @Salon Meblowy
            </Link>
          </SheetTitle>
          <div className='flex flex-col gap-4 text-xl mt-4 '>
            <Link
              aria-label='Porozmawiajmy'
              href='/contact'
            >
              Porozmawiajmy
            </Link>
            <Link
              aria-label='O nas'
              href='/about'
            >
              O nas
            </Link>
            <Link
              aria-label='Produkty'
              href='/products'
            >
              Produkty
            </Link>
            <Link
              aria-label='Koszyk'
              href='/cart'
              className='relative w-fit flex items-center justify-center text-red-500`'
            >
              <ShoppingCart />
              <span className='absolute top-0 right-0 translate-x-1/2 -translate-y-[1/2] text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center'>
                {' '}
                {items.reduce((acc, item) => acc + (item.quantity || 0), 0)}
              </span>
            </Link>
          </div>
          <SheetDescription></SheetDescription>
        </SheetContent>
      </SheetClose>
    </Sheet>
  )
}

export default MobileNav
