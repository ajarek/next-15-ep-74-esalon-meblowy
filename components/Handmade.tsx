import React from 'react'
import furniture from '@/data/furniture.json'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
const Handmade = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-xl'>Meble z duszą ręcznie robione  w drewnie</h1>
      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4'>
        {furniture
        .filter((item)=>item.id <=3 && item.id >0)
        .map((item)=>(
          <Card
            key={item.id}
            className='rounded-lg overflow-hidden shadow-xl'
          >
            <Link href={`/product-id/${item.id}`}>
            <CardHeader  className='relative w-full min-h-[240px]'>
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className='object-cover'
              priority
            />
            </CardHeader>
            <CardContent>
            <h2>{item.name}</h2>
            <p>PLN {item.price.toFixed(2)}</p>
            </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Handmade