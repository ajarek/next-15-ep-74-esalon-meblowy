"use client"; // Wymagane do użycia React hooks w Next.js 13+

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę wysyłania formularza, np. przez API
    console.log('Formularz wysłany:', formData);
    alert(formData.name+ ' ! Dziękujemy za wiadomość.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full  p-8 rounded-lg gap-4 items-center place-items-center">
       
        <div className="relative w-[400px] max-lg:w-full  h-[400px] max-lg:h-300px flex flex-col shadow-lg overflow-hidden  ">
          <Image
            src="/images/contact.png"
            alt="Kontakt"
            fill
            className="object-cover w-full h-auto rounded-lg"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>

       
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl font-bold text-center mb-4">Kontakt - napisz do nas</h1>
          <form onSubmit={handleSubmit} className="space-y-4  ">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-background">
                Imię:
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className='bg-white text-black'
                aria-label='Imię'
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-background">
                Email:
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                 className='bg-white text-black'
                 aria-label='Email'
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-background">
                Wiadomość:
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                 className='bg-white text-black'
                 aria-label='Wiadomość'
              />
            </div>
            <div>
              <Button
                type="submit"
                variant='default'
            className='w-full bg-blue-500 text-background hover:bg-blue-600 mt-4'
            aria-label='Wyslij wiadomość' 
              >
                Wyślij
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;