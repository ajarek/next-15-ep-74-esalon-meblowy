import React from 'react'

const ProductId = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  return <div className='py-16 text-black'>ProductId {id}</div>
}

export default ProductId
