import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function NavigationMenu(props) {
    return (
        <div>
            <span className="text-xl p-2">
                <FontAwesomeIcon 
                    icon={faTimes}
                    onClick={props.closeMenu}/>
            </span>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 p-3 border-b block"
                        onClick={props.closeMenu}
                        >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 p-3 border-t border-b block"
                        onClick={props.closeMenu}
                        >
                        About
                    </Link>                        
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu