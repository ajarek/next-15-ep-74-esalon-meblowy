import Hero from '@/components/Hero'
import Products from '@/components/Products'

export default function Home() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='grid gap-6'>
        <Hero />
        <Products />
      </div>
    </main>
  )
}
