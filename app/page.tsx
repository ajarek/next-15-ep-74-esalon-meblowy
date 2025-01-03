import FurnitureFactory from '@/components/FurnitureFactory'
import Handmade from '@/components/Handmade'
import Hero from '@/components/Hero'
import SalesDepartment from '@/components/SalesDepartment'


export default function Home() {
  return (
    <main className='container mx-auto px-8 py-16 bg-foreground text-background'>
      <div className='grid gap-6'>
        <Hero />
        <Handmade />
        <FurnitureFactory/>
        <SalesDepartment/>
      </div>
    </main>
  )
}
  