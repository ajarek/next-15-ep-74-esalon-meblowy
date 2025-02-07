'use client'

import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useCartStore } from '@/store/cartStore'

const FormPayment = ({ nameUser }: { nameUser: string }) => {
  const { items, total, removeAll } = useCartStore()
  const router = useRouter()
  const { toast } = useToast()

  const toastAlert = () => {
    toast({
      variant: 'default',
      title:
        'Zapłacono ' +
        total().toLocaleString('us', { style: 'currency', currency: 'PLN' }),
      description: 'Dziękujemy ' + nameUser.toUpperCase(),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toastAlert()
    removeAll()
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  return (
    <div className=' w-full min-h-[calc(100vh-194px)]  flex flex-col justify-center max-sm:justify-start p-4 items-center  '>
      {items.length > 0 ? (
        <form
          onSubmit={handleSubmit}
          className='max-w-[480px] w-full   p-4  rounded-lg border-2 border-gray-400  shadow-sm shadow-gray-400'
        >
          <div className='w-100%'>
            <Label htmlFor='cardNumber'>Do zapłaty</Label>
            <Input
              type='text'
              value={total().toLocaleString('pl', {
                style: 'currency',
                currency: 'PLN',
              })}
              readOnly
              required
            />
          </div>

          <div className='w-100%'>
            <Label htmlFor='cardNumber'>Numer karty</Label>
            <Input
              type='text'
              placeholder='1234 5678 9012 3456'
              required
              pattern='^(?:\d{4} ){3}\d{4}$'
            />
          </div>
          <div className='w-100% '>
            <Label htmlFor='expiryDate'>Data ważności</Label>
            <Input
              type='text'
              placeholder='MM/YYYY'
              required
              pattern='^(0[1-9]|1[0-2])\/20[2-9][5-9]$'
            />
          </div>

          <div className='w-100%'>
            <Label htmlFor='cvv'>CVV</Label>
            <Input
              type='text'
              placeholder='123'
              required
              pattern='^[0-9]{3}$'
            />
          </div>

          <div className='w-full flex justify-end  mt-4'>
            <Button
              type='submit'
              aria-label='Zamawiam i płacę'
              className='bg-background text-foreground hover:bg-green-600 hover:text-background'
            >
              Zamawiam i płacę
            </Button>
          </div>
        </form>
      ) : (
        <Button
          onClick={() => router.push('/products')}
          aria-label='Produkty'
          className='bg-background text-foreground hover:bg-green-600 hover:text-background'
        >
          Produkty
        </Button>
      )}
    </div>
  )
}

export default FormPayment
