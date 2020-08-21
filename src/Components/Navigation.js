import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import { Link } from "react-router-dom";

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },    
    })
    
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)'},
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: { opacity: 0, transform: 'translateX(-100%)' },    
    })

    return(
        <nav>
            <span>
                <FontAwesomeIcon 
                    icon = {faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            

            {
                maskTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="menu-mask"
                    onClick={() => setShowMenu(false)}
                >
                </animated.div>
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="nav-drop-down"
                >
                    <span>
                        This is the menu.
                    </span>
                    <ul>
                        <li>
                            <Link 
                                to="/" 
                                className="home-label">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="home-label">About</Link>
                        </li>
                    </ul>


                </animated.div>
                )
            }
            
        </nav>
    )
}


export default Navigation