import React from 'react'

const Card = ({productData}) => {
    console.log(productData);
    
  return (
    <div className='flex , flex-col justify-center items-center gap-4 bg-white p-2 rounded shadow '>
      <img src={productData.image} alt="" className='w-40 h-50' />
      <h1 >{productData.title}</h1>
      <p className='text-gray-700'>{productData.price}</p>
    </div>
  )
}

export default Card
