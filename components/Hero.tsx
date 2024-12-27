import React from 'react'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import Image from 'next/image'

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
        />
          <div className='absolute left-7 top-5 text-lg text-white mb-6 max-lg:hidden'>
          <p>Spełnij swoje marzenie</p>
          <p>SPEŁNIJ JE JUŻ DZIŚ</p>
          </div>
          <Button  variant={'outline'} className='absolute left-7 top-24 max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[400px] shadow-xl  '>Produkty</Button>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Cena</CardTitle>
              <CardDescription>
                Cena od 1000zł do 10000zł
                </CardDescription>
               </CardHeader>
               </Card> 
        </div>
    </section>
  )
}

export default Hero
