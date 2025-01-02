import Image from 'next/image'
import React from 'react'

const FurnitureFactory = () => {
  return (
    <div className='min-h-[300px] flex flex-col gap-4'>
      <h1>Tak tworzymy dla Was meble</h1>
      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center'>
        <div className='relative w-[380px] h-[240px] rounded-lg overflow-hidden shadow-lg'>
          <Image src='/images/wood-1.jpg' alt='fabryka drewna' fill sizes='(max-width: 768px) 100vw, 33vw' priority className='object-cover'/>
        </div>
        <div className='relative w-[380px] h-[240px] rounded-xl overflow-hidden shadow-lg'>
        <Image src='/images/wood-2.jpg' alt='fabryka drewna' fill sizes='(max-width: 768px) 100vw, 33vw' priority className='object-cover'/>
        </div>
        <div className='relative w-[380px] h-[240px] rounded-xl overflow-hidden shadow-lg'>
        <Image src='/images/wood-3.jpg' alt='fabryka drewna' fill sizes='(max-width: 768px) 100vw, 33vw' priority className='object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default FurnitureFactory