import React, { useState } from "react";
import "./trailers.css";

export default function AddTrailer() {
  const [showItems, setShowItems] = useState("trailer-not-visible");
  const [movieItems, setMovieItems] = useState("trailer-visible");

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value === "movie") {
      setShowItems("trailer-not-visible");
      setMovieItems("trailer-visible");
    } else if (e.target.value === "show") {
      setShowItems("trailer-visible");
      setMovieItems("trailer-not-visible");
    } else {
      setMovieItems("trailer-visible");
      setShowItems("trailer-not-visible");
    }
  };
  return (
    <div className="addtrailer-container">
      <form className="addtrailer-form-container">
        <div className="addtrailer-title-text">
          <h1>Add Trailer</h1>
        </div>
        <div className="addtrailer-category-quality">
          <div className="addtrailer-category addtrailer-item">
            <select className="addtrailer-item" onChange={handleChange}>
              <option value="">Trailer Type</option>
              <option value="movie">Movie</option>
              <option value="show">Show</option>
            </select>
          </div>
        </div>

<div className='addtrailer-main'>
        <div className="addtrailer-row1">
          <div className="addtrailer-column1">
            <div className="addtrailer-title addtrailer-item">
              <input placeholder="Title" />
            </div>

            <div className="addtrailer-description addtrailer-item">
              <input placeholder="Description" />
            </div>
            <div className="addtrailer-year addtrailer-item">
              <input placeholder=" Release Year" />
            </div>
            <div className="addtrailer-duration addtrailer-item">
              <input placeholder="Duration" />
            </div>
          </div>
        {/* </div> */}
        
        {/* <div className="addtrailer-row2"> */}
          <div className="addtrailer-column2 addtrailer-item">
            <div className={showItems}>
              <div className="addtrailer-duration addtrailer-item">
                <input placeholder="A" />
              </div>
              <div className="addtrailer-duration addtrailer-item">
                <input placeholder="A" />
              </div>
              <div className="addtrailer-duration addtrailer-item">
                <input placeholder="A" />
              </div>
            </div>
            <div className={movieItems}>
              <div className="addtrailer-duration addtrailer-item">
                <input placeholder="B" />
              </div>
              <div className="addtrailer-duration addtrailer-item">
                <input placeholder="B" />
              </div>
              <div className="addtrailer-duration addtrailer-item">
                <input placeholder="b" />
              </div>
              <div className="addtrailer-duration addtrailer-item">
                <input placeholder="b" />
              </div>
            </div>
          </div>
        </div>

</div>
        <div className="addtrailer-buttons">
          <button className="addcategory-button submit-btn">Submit</button>
          <button className="addcategory-button cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}
