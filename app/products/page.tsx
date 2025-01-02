import React from 'react'

import furniture from '@/data/furniture.json'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from '@/components/Search'

const Products =async ({searchParams,}: {searchParams: Promise<{query?: string}>}) => {
  const { query } = await searchParams  
  return (
    <div className='min-h-screen flex flex-col  bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 gap-4'>
      <h1 className='text-xl'>Wybierz meble z pełnego asortymentu </h1>
      <Search/>
      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4'>
        {furniture
        .filter(fr=>(fr.name).toUpperCase().includes(query?.toUpperCase()??""))
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

export default Products