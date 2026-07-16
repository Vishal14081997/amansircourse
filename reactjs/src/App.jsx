// import React from 'react'
// // import Navbar from './components/Navbar'
// import Child1 from './components/Child1'

// const App = () => {
//   let heading4= "child4"
//   return (
//     <div className='bg-gray-100 flex flex-wrap gap-4'>
//       <Child1 heading= "child 1" description="des for child 1" cardbg= "bg-red-200"/>
//       <Child1 heading= "child 2" description="des for child 2" cardbg= "bg-red-200"/>
//       <Child1 heading= "child 3" description="des for child 3" cardbg= "bg-red-200"/>
//       <Child1 heading= {heading4} description="des for child 4" cardbg= "bg-red-200"/>
//     </div>
//   )
// }

// export default App



// --------------------------------------------------



// import React from 'react'
// import Navbar from './components/Navbar'
// import Child1 from './components/Child1'

// const App = () => {
//   let data = [
//     {
//       id: 1,
//       title: "Iphone",
//       des: "this is iphone series of apple",
//       price: 2000,
//       image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300828_0_gdtzmh.png?tr=w-600"
//     },
//     {
//       id: 2,
//       title: "Sumsung",
//       des: "this is iphone series of sumsung",
//       price: 1599,
//       image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSEj3NY0YwPDvEenfx-FONottBicb9YeHIHaPyUPDhdcXhbVxk_PPD0wWs0CP3IYhlGtxVreMEdFjXxmIYXLeSGoE0kUsMxiFUu9uL3D-iBSsXLguOrNxedxWV9eifkrKyAPjbeQ&usqp=CAc"
//     },
//     {
//       id: 3,
//       title: "Google pixel",
//       des: "this is pixel series of google",
//       price: 1599,
//       image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSEj3NY0YwPDvEenfx-FONottBicb9YeHIHaPyUPDhdcXhbVxk_PPD0wWs0CP3IYhlGtxVreMEdFjXxmIYXLeSGoE0kUsMxiFUu9uL3D-iBSsXLguOrNxedxWV9eifkrKyAPjbeQ&usqp=CAc"
//     },
//     {
//       id: 4,
//       title: "pixel 10",
//       des: "this is pixel series of google",
//       price: 1899,
//       image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSEj3NY0YwPDvEenfx-FONottBicb9YeHIHaPyUPDhdcXhbVxk_PPD0wWs0CP3IYhlGtxVreMEdFjXxmIYXLeSGoE0kUsMxiFUu9uL3D-iBSsXLguOrNxedxWV9eifkrKyAPjbeQ&usqp=CAc"
//     },
//   ]
//   return (
//     <div className='bg-gray-100 flex flex-wrap gap-4'>
//       {
//         data.map((item) => {
//           return (
//             <Child1 productData={item} />
//           )
//         })
//       }
//       {/* <Child1 productData={data[3]}/> */}
//     </div>
//   )
// }

// export default App

// --------------------------------------------------

// import React, { useState, useEffect } from 'react'
// import Navbar from './components/Navbar'
// import Counter1 from './components/Counter1'
// import axios from "axios"

// const App = () => {
//     console.log("App component");
//     const [count, setCount] = useState(0)
//     // let count = 0;
//     // console.log(count);
//     const handleIncCount = () => {
//         // count = count+1
//         // console.log(count);
//         setCount(count + 1)
//     }
//     const handleDecCount = () => {
//         // count = count-1
//         // console.log(count);
//         setCount(count - 1)
//     }

//     const [data, setData] = useState([])
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
//             console.log(response.data);
//             setData(response.data)
//         } catch (error) {
//             console.log(error);
//         }
//     }

//       const fetchProduct = async () => {
//         try {
//             const response = await axios.get(`https://fakestoreapi.com/Products`)
//             console.log(response.data);
//             setData(response.data)
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     useEffect(() => {
//         fetchData()
//         console.log("Use Effect called");
        
//     }, [count])
//     return (
//         <>
//             <div className='h-screen bg-amber-200'>
//                 <div className='bg-gray-100 flex items-center justify-center '>
//                     <button className='text-lg font-semibold border border-red-900 p-1 text-red-900 cursor-pointer active:bg-red-900 active:text-white' onClick={handleDecCount}>Dec count (-)</button>
//                     <p className='text-2xl font-medium '>The value of count is : {count}</p>
//                     <button className='text-lg font-semibold border border-green-900 text-green-900 p-1 cursor-pointer active:bg-green-800 active:text-white ' onClick={handleIncCount}>Dec count (+)</button>
//                 </div>
//                 <Counter1 count={count} setCount={setCount} />
//             </div>
//         </>
//     )
// }
// export default App

// react m vairiable m y dikkat hoti h varible jab ham update krte h to  react ko pata nhi chalta h ki us ka components update hua h  to us ko componets ko dubara s render krna h us k liye ham state use krte h 

// react  - (1) class components (2) funcation component

// react lifecycle - (1) componentDidMount (2) componentDidUpdate(3) componentWillUnmount



// --------------------------------------------------
// import React from 'react'

// const App = () => {
//   let x = 5;
//   let y = 8;
//   function increase() {
//     x = x + 1;
//     console.log(x);
//   }
//   // Kyuki x normal JavaScript variable hai. React ko pata hi nahi chala ki value change hui hai.
//   return (
//     <div>
//       <h1>{x * y}</h1>
//       <h1>hy vishal</h1>
//       <button onClick={increase}>Increase</button>

//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [x, setX] = useState(10);
  const [name, setName] = useState("Vishal");
  const [students, setStudents] = useState(["Sam", "Peter"]);

  function increase() {
    setX(x + 1);
  }

  function addStudent() {
    setStudents([...students, "Rahul"]);
  }

  return (
    <>
      <h1>{x}</h1>
      <button onClick={increase}>
        Increase
      </button>



      <h1>{name}</h1>

      <button onClick={() => setName("Rahul")}>
        Change Name
      </button>

      {students.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}

      <button onClick={addStudent}>
        Add Student
      </button>
    </>
  )
}

export default App

// useState React ka ek Hook hai jo component ke andar data (state) ko store aur update karne ke liye use hota hai. Jab state update hoti hai, React component automatically dubara render hota hai aur UI me latest value dikhai deti hai.