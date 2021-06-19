import React from 'react'
import SingleUser from './SingleUser'
import './users.css'
 
export default function Users({users}) {
    return (
        <div className="users">
            <h1 style={{marginLeft:"20px"}}>Users List</h1>
            <div className="table-titles">
                <div className="table-profile table-item">Profile</div>
                <div className="table-user table-item">User</div>
                <div className="table-email table-item">Email</div>
                <div className="table-country table-item">Country</div>
                <div className="table-date table-item">Join Date</div>
                <div className="table-actions table-item">Actions</div>
                  
            </div>
            <div>
                {users.map(user=>
                    <SingleUser user={user} />
                )}
            </div>
            
        </div>
    )
}
 
