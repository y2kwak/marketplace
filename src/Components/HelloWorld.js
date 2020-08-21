import React from 'react'

// declaring 1) stateless component
function HelloWorld(props) {
    return (
        <h1>Hello {props.name}</h1>
    )
}

// delcaring 2) class-based
// class HelloWorld extends React.Component{
//     render(){
//         return (
//             <h1>Hello {this.props.name}</h1>
//         )
//     }
// }


export default HelloWorld // export to be used by App.js