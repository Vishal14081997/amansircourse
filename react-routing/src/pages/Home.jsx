import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import ProductContext from '../context/ProductContext'

const Home = () => {
  const user = useContext(UserContext)
  const products = useContext(ProductContext);

  return (
    <>
      <div>
        <div>Home page</div>
        <h2>Name : {user.name}</h2>
        <h2>Age : {user.age}</h2>

        <h1>Product List</h1>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </>

  )
}

export default Home