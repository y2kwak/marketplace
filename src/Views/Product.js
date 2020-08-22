import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

function Product() {
    const { id } = useParams() // gives id from params to make use of it in url
    const url = `http://5f418acfd4b4790016fd7291.mockapi.io/api/vi/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() => {
        setProduct({
            // set request
            loading: true,
            data: null,
            error: false
        })
        axios.get(url) // request goes through, successful
        .then(response => {
            setProduct({
                loading:false,
                data: response.data,
                error: false
            })
        })
        .catch(error => {
            setProduct({
                loading:false,
                data: null,
                error: true
            })
        })
    }, [url])

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
            <div>
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