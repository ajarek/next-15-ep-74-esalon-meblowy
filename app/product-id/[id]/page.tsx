import React from 'react'

const ProductId = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  return <div className='min-h-[calc(100vh-64px)] flex items-center justify-center bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8'>ProductId {id}</div>
}

export default ProductId
