import React, { useEffect, useState } from "react";
import Card from "../component/Card.jsx";

const Product = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const productData = await response.json();
      setData(productData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-3  mx-auto gap-4 p-4 bg-gray-200">
      {data.map((item) => {
        return(
          <Card productData ={item}></Card>
        )
      }
       )}
    </div>
  );
};

export default Product;
