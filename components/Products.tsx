import React from 'react'
import { Button,  } from './ui/button'
import { Card, CardHeader,CardTitle, CardDescription, CardContent } from './ui/card'

const Products = () => {
  return (
    <section className="mt-12">
    <Card>
      <CardHeader>
        <CardTitle>Drewniane metraże</CardTitle>
        <CardDescription>
          Zbuduj swój dom tak jak chcesz
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="secondary">
          Zobacz więcej
        </Button>
      </CardContent>
    </Card>
  </section>
  )
}

export default Products