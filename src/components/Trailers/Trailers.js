import React from 'react'
import './trailers.css'
import SingleTrailer from './SingleTrailer'

export default function Trailers() {
    const array=[1,2,3,4,5]
    return (
        <div style={{marginLeft:"500px",marginTop:"100px"}}>
       <h1> Trailers List </h1>
        {array.map(arr=>
            <SingleTrailer/>)}
    </div>
    )
}
