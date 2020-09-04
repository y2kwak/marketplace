import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Cart(){
    return(
        <div className="text-xl p-2">
            <Link to="/cartpage">
            <FontAwesomeIcon 
                icon={ faShoppingBasket}/>
            </Link>
            
        </div>
    )
}
export default Cart