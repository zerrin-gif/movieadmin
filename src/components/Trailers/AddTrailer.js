import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import "./trailers.css";

export default function AddTrailer() {
  const [showItems, setShowItems] = useState("trailer-not-visible");
  const [movieItems, setMovieItems] = useState("trailer-visible");
  const [image, setImage] = useState('')
  const [banner, setBanner] = useState('')
  const [type, setType] = useState('')
  const [title, setTitle] = useState('')
  const [episodeTitle, setEpisodeTitle] = useState('')
  const [year, setYear] = useState('')
  const [duration, setDuration] = useState('')
  const [description, setDescription] = useState('')
  const [ageRestriction, setAgeRestriction] = useState('')
  const [totalSeasons, setTotalSeasons] = useState('')
  const [seasonNumber, setSeasonNumber] = useState('')
  const [episodeNumber, setEpisodeNumber] = useState('')
  const [trailerUrl, setTrailerUrl] = useState('')
  const [cast, setCast] = useState([])
  const [genre, setGenre] = useState([])
  const [tags, setTags] = useState([])

  const history = useHistory()
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
    setType(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    // axios
    // .post('https://movieapp-server.herokuapp.com/trailers')
    const formData = new FormData()
    if (image.length !== 0) {
      const formImageData = new FormData()
      formImageData.append('file', image)
      formImageData.append('upload_preset', 'movieadmin')
      await axios.post('https://api.cloudinary.com/v1_1/movieadmin/image/upload', formImageData)
        .then((res) => {
          formData.append('imageId', res.data.url)
        })
        .catch((err) => console.log(err))
    }
    if (banner.length !== 0) {
      const formBannerData = new FormData()
      formBannerData.append('file', banner)
      formBannerData.append('upload_preset', 'movieadmin')
      await axios.post('https://api.cloudinary.com/v1_1/movieadmin/image/upload', formBannerData)
        .then((res) => {
          formData.append('bannerId', res.data.url)
        })
        .catch((err) => console.log(err))
    }
    const mediaId = formData.getAll('imageId').join('')
    const bannerId = formData.getAll('bannerId').join('')

    await axios.post('https://movieapp-server.herokuapp.com/trailers', {
      mediaId, bannerId, type, title, duration, ageRestriction,
      totalSeasons, year, seasonNumber, episodeTitle, episodeNumber,
      trailerUrl, description, cast, tags, genre
    })
      .then((res) => {
        console.log(res.data)

      })
      .catch((err) => console.log(err))

    history.push('/trailers')
  }

  const cancelUpload = (e) => {
    e.preventDefault()
    setImage('')
    setBanner('')
    setType('')
    setTitle('')
    setEpisodeTitle('')
    setYear('')
    setDuration('')
    setDescription('')
    setAgeRestriction('')
    setTotalSeasons('')
    setSeasonNumber('')
    setEpisodeNumber('')
    setTrailerUrl('')
  }

  return (
    <div className="addtrailer-container">
      <form className="addtrailer-form-container" onSubmit={handleSubmit}>
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
                <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div className="addtrailer-description addtrailer-item">
                <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="addtrailer-year addtrailer-item">
                <input placeholder=" Release Year" value={year} onChange={(e) => setYear(e.target.value)} />
              </div>
              <div className="addtrailer-duration addtrailer-item">
                <input placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
              </div>
              <div className="addtrailer-duration addtrailer-item">
                <input placeholder="Image" type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
              </div>
              <div className="addtrailer-duration addtrailer-item">
                <input placeholder="Image" type="file" onChange={(e) => { setBanner(e.target.files[0]) }} />
              </div>
            </div>
            {/* </div> */}

            {/* <div className="addtrailer-row2"> */}
            <div className="addtrailer-column2 addtrailer-item">
              <div className={showItems}>
                <div className="addtrailer-duration addtrailer-item">
                  <input placeholder="Total Number of Seasons" value={totalSeasons} onChange={(e) => setTotalSeasons(e.target.value)} />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                  <input placeholder="Season Number" value={seasonNumber} onChange={(e) => setSeasonNumber(e.target.value)} />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                  <input placeholder="Episode Title" value={episodeTitle} onChange={(e) => setEpisodeTitle(e.target.value)} />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                  <input placeholder="Episode Number" value={episodeNumber} onChange={(e) => setEpisodeNumber(e.target.value)} />
                </div>
              </div>
              <div className={movieItems}>
                <div className="addtrailer-duration addtrailer-item">
                  <input placeholder="Age Restriction" value={ageRestriction} onChange={(e) => setAgeRestriction(e.target.value)} />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                  <input placeholder="Traile Url" value={trailerUrl} onChange={(e) => setTrailerUrl(e.target.value)} />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                  <input placeholder="Cast" value={cast} onChange={(e) => setCast(e.target.value.split(','))} />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                  <input placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value.split(','))} />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                  <input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value.split(','))} />
                </div>

              </div>
            </div>
          </div>

        </div>
        <div className="addtrailer-buttons">
          <button className="addcategory-button submit-btn" type="submit">Submit</button>
          <button className="addcategory-button cancel-btn" onClick={cancelUpload}>Cancel</button>
        </div>

      </form>
    </div>
  );
}
