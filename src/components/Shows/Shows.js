import React from 'react'
import SingleShow from './SingleShow'
import './shows.css'

export default function Shows() {
    const array=[1,2,3,4,5]
    return (
        <div style={{marginLeft:"500px",marginTop:"100px"}}>
           <h1>Shows List </h1> 
            {array.map(arr=>
                <SingleShow/>)}

        </div>
    )
}
 