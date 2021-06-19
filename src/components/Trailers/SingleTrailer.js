import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './trailers.css'
import { AiOutlineEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
// import Modal from 'react-modal';
// Modal.setAppElement('#root');
export default function SingleTrailer({trailer}) {
    // const [profileImageUrl, setProfileImageUrl] = useState('');
    // const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
        axios
            .get(`https://movieapp-server.herokuapp.com/trailers`)
            .then((res) => {
                           console.log(res.data) 
                       })
            .catch((err) => {
                           console.log(err);
                       });
        
	}, []);
  const deleteTrailer=(id)=>{
      console.log(id)
      axios
      .delete(`https://movieapp-server.herokuapp.com/trailers/${id}`)
      .then((res) => {               
        window.location.reload()
                 })
      .catch((err) => {
                console.log(err);
                 });
  }
    return (
        <div className="single-trailer">
           <div className="single-trailer-items trailer-title">{trailer.title}</div>
           <div className="single-trailer-items trailer-genre">{`${trailer.genre.map(item=>item )}`}</div> &nbsp;
           <div className="single-trailer-items trailer-year">{trailer.year}</div>
           <div className="single-trailer-items trailer-description">{trailer.description}</div>
           <div className="actions">
               <div className=" action-items view-action" ><AiFillEye/></div>
               <div className=" action-items edit-action" ><AiOutlineEdit/></div>
               <div className="action-items delete-action" onClick={()=>deleteTrailer(trailer._id)}><AiFillDelete/></div>
           </div>
        </div>
    )
}