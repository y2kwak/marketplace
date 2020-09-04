import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product() {
    const { id } = useParams() // gives id from params to make use of it in url
    const url = `http://5f418acfd4b4790016fd7291.mockapi.io/api/vi/products/${id}`

    let product = useAxiosGet(url)

    let content = null

    if(product.error){
        content = <p>
            There was an error. Please refresh or try again later.
        </p>
    }

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.data){
        content = 
            <div className="p-5">
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>

                <div>
                    <img
                        src={product.data.images}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>

            </div>
    } 
    return(
        <div>
            {content}
        </div>
    )
}

export default Product