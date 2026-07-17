// import React from 'react'

// const Child1 = (props) => {
//     console.log(props.heading);
    
//   return (
//     <div className= {`${props.cardbg} flex flex-col w-50`}>
//         <h1 className='text-xl'>{props.heading}</h1>
//         <p className='text-gray-700'>{props.description}</p>
//         <button className='bg-blue-500 text-center text-white p-3px'>click me</button>
//     </div>
//   )
// }

// export default Child1


// --------------------------------------------------


// import React from 'react'
// import GrandChild from './GrandChild'

// const Child1 = ({heading, description , cardbg}) => {
//     // console.log(props.cardbg);
    
//   return (
//     <div className= {`${cardbg} flex flex-col w-50 p-3`}>
//         <h1 className='text-xl'>{heading}</h1>
//         <p className='text-gray-700'>{description}</p>
//         <button className='bg-blue-500 text-center text-white p-3px'>click me</button>
//         <GrandChild title = {heading}/>
//     </div>
//   )
// }

// export default Child1


// --------------------------------------------------

// import React from 'react'
// import GrandChild from './GrandChild'

// const Child1 = ({productData}) => {
//     console.log(productData);
    
//   return (
//    <div className='p-4 bg-gray-100 shadow flex flex-col  gap-2 '>
//      <img src={productData.image} alt={productData.title} className='w-65' />
//      <h1 className='text-2xl font-medium text-gray-700'>{productData.title}</h1>
//      <p className='text-xs text-gray-600'>{productData.des}</p>
//      <p className= 'text-lg text-green-500'>${productData.price}</p>
//      <button className='p-1 bg-yellow-500 font-bold cursor-pointer active:bg-yellow-600'>Buy now</button>
//    </div>
//   )
// }
// export default Child1