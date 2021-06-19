import React from 'react'
import SingleRating from './SingleRating'
import './ratings.css'

export default function Ratings() {

    const array=[1,2,3,4,5]
    return (
        <div style={{marginLeft:"500px",marginTop:"100px",height:"520px"}}>
           <h1>Ratings List </h1> 
            {array.map(arr=>
                <SingleRating/>)}

        </div>
    )
}
 