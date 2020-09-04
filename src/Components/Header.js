import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import Cart from './Cart'

function Header() {
    return(
        <header className = "border-b p-3 flex justify-between items-center">
            <Navigation />
            <Link to="/">
            <span className = "font-bold text-xl px-2">
                MarketPlace
            </span>
            </Link>
            <Cart />
        </header>
    )
}


export default Header