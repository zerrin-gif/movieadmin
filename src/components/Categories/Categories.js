import React from 'react'
import SingleCategory from './SingleCategory'
import './categories.css'

export default function Categories() {
    const array=[1,2,3,4,5]
    return (
        <div style={{marginLeft:"500px",marginTop:"100px"}}>
        <h1>Categories List </h1>
        {array.map(arr=>
            <SingleCategory/>)}

    </div>
    )
}
