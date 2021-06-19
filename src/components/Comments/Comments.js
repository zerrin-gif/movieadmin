import React from 'react'
import SingleComment from './SingleComment'
import './comments.css'
 
export default function Comments({comments}) {
    return (
        <div className="comments">
            <h1 style={{marginLeft:"20px"}}>Comment Lists</h1>
            <div className="table-titles">
            <div className="table-title table-item">NO</div>
                <div className="table-title table-item">TITLE</div>
                <div className="table-author table-item">AUTHOR</div>
                <div className="table-comment table-item">DESCRIPTION</div>
                <div className="table-date table-item">CREATED DATE</div>
                <div className="table-actions table-item">ACTION</div>
            </div>
            
            {comments.map(comment=>
                <SingleComment comment={comment}/>)}
        </div>
    )
}
