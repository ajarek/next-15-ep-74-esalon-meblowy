import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SalesDepartment = () => {
  return (
    <div className=' flex flex-col gap-4 '>
       <h1 className='text-xl'>Jesteśmy do Twojej dyspozycji.</h1>
      <Link href='/contact' className='relative w-full min-h-[316px] flex flex-col items-center justify-center rounded-lg overflow-hidden'>
      <Image src={'/images/sale.jpeg'} alt='sales department' fill sizes='(max-width: 768px) 100vw, 33vw' priority className='object-cover'/>
      <h1 className='absolute text-3xl text-center font-bold  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Dział handlowy odpowie na wszystkie Twoje pytania</h1>
      </Link>
    </div>
  )
}

export default SalesDepartment