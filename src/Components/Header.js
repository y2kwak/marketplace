import React from 'react'
import Navigation from './Navigation'

function Header() {
    return(
        <header className = "app-header">
            <span className = "app-title">
                My App Name
            </span>
            <Navigation />

        </header>
    )
}


export default Header