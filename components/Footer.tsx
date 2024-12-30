import React from 'react'
    import { Facebook, Instagram, Twitter } from 'lucide-react'

    const Footer = () => {
      return (
        <footer className='bg-background text-foreground py-8 border-t-2'>
          <div className='container mx-auto px-4 flex items-center justify-between'>
            <p>
              &copy; {new Date().getFullYear()} Salon Meblowy. All rights
              reserved.
            </p>
            <div className='flex gap-4'>
              <a href='#' aria-label='Facebook'>
                <Facebook size={24} />
              </a>
              <a href='#' aria-label='Instagram'>
                <Instagram size={24} />
              </a>
              <a href='#' aria-label='Twitter'>
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </footer>
      )
    }

    export default Footer
