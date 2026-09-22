import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {

  const [productsArr, setProductsArr] = useState([]);
  console.log(productsArr);

  async function getData() {
    let res = await fetch('https://dummyjson.com/products');
    let data = await res.json();
    console.log(data); //{}
    console.log(data.products) //[{}, {}, {}...30]
    setProductsArr(data.products)
  }

  useEffect(() => {
    getData();
  }, [])



  return (
    <div className='bg-amber-950 text-white'>
      <h1 className='bg-amber-200 text-black text-center h-[60px] p-4'>This is Home Page</h1>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
        {productsArr.map((val, i) => {
          return <div className='border flex flex-col text-center gap-3 p-10'>
            <img src={val.thumbnail} alt="" />
            <p>{val.title}</p>
            <p>{val.price}</p>
            <button className='bg-black cursor-pointer hover:bg-[#202020] text-white px-5 py-4 w-full rounded-2xl'>Add to Cart</button>

            <button className='bg-blue-950 cursor-pointer hover:bg-blue-800 text-white px-5 py-4 w-full rounded-2xl'>View Product</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Home
