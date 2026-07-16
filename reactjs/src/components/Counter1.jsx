import React from 'react'
import GrandChild from './GrandChild';

const Counter1 = ({ count, setCount }) => {
  console.log("counter 1 component");

  return (
    <div>
      <div className='bg-green-200 flex flex-col justify-center items-center gap-3 h-60'>
        {count}
      </div>
      <GrandChild setCount={setCount} />
    </div>
  )
}

export default Counter1