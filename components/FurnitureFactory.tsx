import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const FurnitureFactory = () => {
  return (
    <div className='min-h-[300px] flex flex-col gap-4'>
      <h1 className='text-xl'>Tak tworzymy dla Was meble</h1>
      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center'>
        <Card >
          <CardHeader className='relative w-[380px] h-[240px] rounded-lg overflow-hidden shadow-lg'>
          <Image src='/images/wood-1.jpg' alt='fabryka drewna' fill sizes='(max-width: 768px) 100vw, 33vw' priority className='object-cover'/>
          </CardHeader>
          <CardContent>
            <p>Używamy najlepszego surowca.</p>
          </CardContent>
        </Card>

        <Card >
        <CardHeader className='relative w-[380px] h-[240px] rounded-lg overflow-hidden shadow-lg'>
        <Image src='/images/wood-2.jpg' alt='fabryka drewna' fill sizes='(max-width: 768px) 100vw, 33vw' priority className='object-cover'/>
        </CardHeader>
        <CardContent>
          <p>Artyści projektują wszystkie elementy.</p>
        </CardContent>
        </Card>
        
        <Card >
          <CardHeader className='relative w-[380px] h-[240px] rounded-lg overflow-hidden shadow-lg'>
        <Image src='/images/wood-3.jpg' alt='fabryka drewna' fill sizes='(max-width: 768px) 100vw, 33vw' priority className='object-cover'/>
          </CardHeader>
          <CardContent>
            <p>Technika gwarantuje super dokładność.</p>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

export default FurnitureFactory