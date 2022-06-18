import React from "react"

function Conditional(props) {
    //Use ternary Operator Instead
    
    if(props.isLoading === true) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <h1>Some cool stuff about conditional rendering</h1>
        )
    }
    
}

export default Conditional