import React from 'react'
import HelloWorld from '../Components/HelloWorld' 


function Home() {
    let content = null
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