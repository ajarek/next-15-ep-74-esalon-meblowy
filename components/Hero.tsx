import React from 'react'
import { Button, buttonVariants } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpenText,  Sofa } from 'lucide-react'

const Hero = () => {
  return (
    <section className='grid grid-cols-[3fr_1fr] max-lg:grid-cols-1 gap-4 items-center'>
      <div className='relative w-full min-h-[500px] flex flex-col items-center justify-center'>
        <Image
          src={'/images/hero.webp'}
          alt='hero'
          fill
          sizes='(max-width: 768px) 100vw, 33vw'
          className='object-cover object-top max-lg:object-center rounded-2xl shadow-lg'
          priority
        />
        <div className='absolute left-7 top-5 text-lg text-white mb-6 max-lg:hidden'>
          <p>Spełnij swoje marzenie</p>
          <p>SPEŁNIJ JE JUŻ DZIŚ</p>
        </div>
        <Link
          href='/products'
          className={`${buttonVariants({
            variant: 'default',
          })} absolute left-7 top-24 max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[400px] shadow-xl `}
          aria-label='Produkty'
        >
          Produkty
        </Link>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='box' style={{backgroundImage:"url('/images/light.jpg')"}}>
          <div className='ribbon'>
            <span>Klient</span>

          </div>
          <BookOpenText
            size={48}
            className='absolute top-5 left-5'
            aria-label='Book'
          />
          <p className=' text-xl'>Zostań stałym klientem</p>
          <Button
            variant='default'
            className=''
            aria-label='Zarejestruj się'
          >
            Zarejestruj się
          </Button>
        </div>
        <div className='box ' style={{backgroundImage:"url('/images/dark.jpg')"}}>
          <div className='ribbon'>
            <span>Produkty</span>
            
          </div>
          <Sofa size={48} color='white' className='absolute top-5 left-5'  aria-label='Sofa'/>
          <p className='text-white text-xl'>Nowe Produkty</p>
          <Button
            variant='outline'
            className='text-black'
            aria-label='Zobacz teraz'
          >
            Zobacz teraz
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
