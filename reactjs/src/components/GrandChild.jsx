import React from 'react'

const GrandChild = ({ title, setCount }) => {
  console.log("GrandChild component");

  return (
    <div className ="flex items-center justify-center ">
      <button className='text-lg font-semibold border border-red-900 p-1 text-red-900 cursor-pointer active:bg-red-900 active:text-white' onClick={()=>{setCount((prev)=>prev-1)}} >Dec count (-)</button>
      <div className='font-bold'>GrandChild-{title}</div>
     <button className='text-lg font-semibold border border-green-900 text-green-900 p-1 cursor-pointer active:bg-green-800 active:text-white ' onClick={()=>{setCount((prev)=>prev+1)}}>Dec count (+)</button>

    </div>


  )
}
export default GrandChild