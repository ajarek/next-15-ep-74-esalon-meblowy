'use client'

import React, { use } from 'react'
import furniture from '@/data/furniture.json'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { useCartStore } from "@/store/cartStore"
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation"
import type {Item} from "@/store/cartStore"


const ProductId =  ({ params }: { params: Promise<{ id: string }> }) => {
  const { addItemToCart, items } = useCartStore()
  const router = useRouter()
  const [quantity, setQuantity] = React.useState(1)
  const { id } = use(params)
  const item = furniture.find((item:Item) => item?.id == +id)

  const handleCart = (item: Item) => {
    if (items.some((i) => i.id === item?.id)) return
    const newItem = { ...item } as Item
    addItemToCart(newItem) 
    router.push("/products")
    setQuantity(1)
  }

  return (
    <div className='min-h-[calc(100vh-64px)] flex items-center justify-center bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full grid grid-cols-2 max-lg:grid-cols-1 gap-4 place-items-center'>
      <div className='relative w-full min-h-[300px] rounded-lg overflow-hidden shadow-lg'>
        <Image
          src={item?.image||'/images/wood-1.jpg'}
          alt={item?.name||'fabryka drewna'}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className='object-cover'
          priority
        />
      </div>
      <div className='w-full flex flex-col gap-4 p-8 '>
        <h1 className='text-xl'> {item?.name}</h1>
        <p>{item?.description}</p>
        <p>PLN {item?.price.toFixed(2)}</p>

        <p className='flex items-center gap-2'>Ilość: <Input type="number" className='w-20 px-2  ' defaultValue={1} min={1} onChange={(e) => setQuantity(+e.target.value)} /></p>
        <p>Razem do zapłaty: PLN {item?.price? (item?.price * quantity).toFixed(2) : 0}</p>
        <Button
          onClick={() =>
            handleCart({
              id: Number(item?.id) || 0,
              name: item?.name || "",
              price: item?.price  || 0,
              quantity: quantity || 1,
              image: item?.image || "",
            })
          }
          className='w-fit mt-4'
        >
          Add to Cart
        </Button>
      </div>

      </div>
      
    </div>
  )
}

export default ProductId
