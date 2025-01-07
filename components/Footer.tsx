import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='bg-background text-foreground py-4 border-t-2'>
      <div className='container mx-auto px-4 flex flex-wrap items-center justify-between gap-4'>
        <div>
          &copy; {new Date().getFullYear()} Salon Meblowy. Wszelkie prawa
          zastrzeżone.
        </div>
        <div className='flex gap-4'>
          <a
            href='#'
            aria-label='Facebook'
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href='#'
            aria-label='Instagram'
          >
            <FaInstagram size={24} />
          </a>
          <a
            href='#'
            aria-label='Twitter'
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
