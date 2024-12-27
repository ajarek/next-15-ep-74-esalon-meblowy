import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center">
    <div>
      
      <p className="text-lg text-gray-600 mb-6">
        Spraw, aby Twoje marzenia o idealnym wnętrzu stały się rzeczywistością
      </p>
      <Button size="lg">
        Zobacz kolekcję
      </Button>
    </div>
    
    <Card>
      <CardHeader>
        <CardTitle>Zostań stałym klientem</CardTitle>
        <CardDescription>
          Dołącz do naszego programu lojalnościowego
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full">
          Zarejestruj się
        </Button>
      </CardContent>
    </Card>
  </section>
  )
}

export default Hero