import React, { useState, useEffect } from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {
  const url = `https://5f418acfd4b4790016fd7291.mockapi.io/api/vi/products?page=1&limit=10`

  let products = useAxiosGet(url)
  
  let content = null

    if(products.error){
      content = <p>
          There was an error. Please refresh or try again later.
      </p>
    }

    if(products.loading){
      content = <Loader></Loader>
    }


    if(products.data){
      content = 
          // map throught products.data because it is an array from the first page of products
          // when looping through, need to identify key
          products.data.map((product) => 
              <div key={product.id}> 
                <ProductCard 
                    product={product}
                />
              </div>
          )
    } 

    return(
        <div>
          <h1 className="font-bold text-2xl"> 
            Best Sellers
          </h1>
          {content}
        </div>
    )
}

export default Home