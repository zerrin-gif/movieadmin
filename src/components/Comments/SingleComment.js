import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './comments.css'
import { AiOutlineEdit,AiFillDelete, AiFillEye } from "react-icons/ai";

export default function SingleComment({comment}) {

   const[authorFirstname,setAuthorFirstname]=useState('')
   const[authorLastname,setAuthorLastname]=useState('')

    useEffect(() => {
        axios
            .get(`https://movieapp-server.herokuapp.com/users/${comment.userId}`)
            .then((res) => {
                           console.log(res.data)
                           setAuthorFirstname(res.data.firstname); 
                           setAuthorLastname(res.data.lastname)
                       })
            .catch((err) => { 
                           console.log(err);
                       });
        
	}, [comment.userId]);

 const deleteComment=(id)=>{
    
        console.log(id)
        axios
        .delete(`https://movieapp-server.herokuapp.com/comments/${id}`)
        .then((res) => {
                       
          window.location.reload()
                   })
        .catch((err) => {
                       console.log(err);
                   });
  
    }

    return (
        <div className="single-comment">
            <div className="single-comment-items comment-title">{comment.title}</div>
            <div className="single-comment-items comment-author">{authorFirstname} {authorLastname}</div>
            <div className="single-comment-items comment-content">{comment.content.slice(0,60)}...</div>
            <div className="single-comment-items comment-date">{comment.createdAt.slice(0,10)}</div>  
            <div className="actions">
            <div className=" action-items view-action" ><AiFillEye/></div>
               <div className=" action-items edit-action" ><AiOutlineEdit/></div>
               <div className="action-items delete-action" onClick={()=>deleteComment(comment._id)}><AiFillDelete/></div>
           </div>
        </div>
    )
}
