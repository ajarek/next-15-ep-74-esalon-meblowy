"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className='w-full container min-h-screen flex flex-col items-center justify-center gap-4 p-4'>
      <Image src='/notfound.jpeg' alt='404' width={400} height={266} priority/>
      <h1 className='text-center text-xl font-semibold'>Nie znaleziono strony, do której próbujesz uzyskać dostęp.</h1>
      <p className='text-center'>
      Strona, której szukasz, mogła zostać usunięta, miała swoją nazwę
      uległy zmianie lub są chwilowo niedostępne.
      </p>
      <div className=''>
        <Button
          onClick={() => { router.push("/") }}
          aria-label='Go tony głównej'
        >
          Wróć do strony głównej
        </Button>
      </div>
    </div>
  )
}
export default NotFoundPage
