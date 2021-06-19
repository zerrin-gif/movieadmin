import React from 'react'
import './categories.css'

export default function AddCategory() {
    return (
      <div className="addcategory-container">
          <form>
                <div className="addcategory-title"><h1>Add Category</h1></div>
                <div className="addcategory-name"><input className="addcategory-name-input" placeholder="Name" /></div>
                <div className="addcategory-description"><input className="addcategory-description-input" placeholder="Decription" /></div>
                <div className="addcategory-status">
                    <h3>Status </h3>
                    <div className="addcategory-circle-container">
                
                        <div className="addcategory-circle"></div>
                        <p>enable</p>
                        <div className="addcategory-circle"></div>
                        <p>disable</p>
                    </div>
                </div>
                <div className="addcategory-buttons" >
                    <button className="addcategory-button submit-btn" >Submit</button>
                    <button className="addcategory-button cancel-btn" >Cancel</button>
                </div>

          </form>
          
      </div>

    )
}
