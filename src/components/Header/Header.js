import React, { useState, useEffect } from 'react';
import './header.css'
import logo from '../../images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonPlusFill,BsFillEyeFill,BsFillHouseDoorFill,BsFillStarFill,BsChatFill,BsFillPeopleFill,BsCardList,BsFilm,BsChevronRight,BsChevronDown } from "react-icons/bs";


export default function Header() {

  const[classname,setClassname]=useState('header-not-visible')
  const[categoryClassname,setCategoryClassname]=useState('dropdown-closed')
  const[trailerClassname,setTrailerClassname]=useState('dropdown-closed')


  const[categoryArrowRight,setCategoryArrowRight]=useState('category-icon-right open')
  const[categoryArrowDown,setCategoryArrowDown]=useState('category-icon-down close')

  const[trailerArrowRight,setTrailerArrowRight]=useState('trailer-icon-right open')
  const[trailerArrowDown,setTrailerArrowDown]=useState('trailer-icon-down close')


  const toggleMenu=()=>{
      setClassname('header-not-visible')
  }
  const toggleMenu2=()=>{
    setClassname('header-visible')
}

const openTrailerDropdown=()=>{
    setTrailerClassname('dropdown-open')
    setTrailerArrowRight('trailer-icon-down close')
    setTrailerArrowDown('trailer-icon-down open')
}

const closeTrailerDropdown=()=>{
    setTrailerClassname('dropdown-closed')
    setTrailerArrowRight('trailer-icon-down open')
    setTrailerArrowDown('trailer-icon-right close')
}

 
const openCategoryDropdown=()=>{
    setCategoryClassname('dropdown-open')
    setCategoryArrowRight('category-icon-down close')
    setCategoryArrowDown('category-icon-down open')
  }

  const closeCategoryDropdown=()=>{
    setCategoryClassname('dropdown-closed') 
    setCategoryArrowRight('category-icon-down open')
    setCategoryArrowDown('category-icon-right close')
    
  }

    return (
        <div className="header-container">
            <div className={classname}>
                <div className="menu-container">
                    <div className="logo-image"><img src={logo} alt="logo"/></div>
                    <div className="streamit"><a className="streamit" href="/">ineTrail</a></div>
                    <div className="burgermenu" onClick={toggleMenu}><GiHamburgerMenu/></div>
                </div>
                <div className="menu-options">
                    <div className="menu-item"><a href="/dashboard"><BsFillHouseDoorFill/> Dashboard</a></div>
                    <div className="menu-item"><a href="/ratings"> <BsFillStarFill/> Rating</a></div>
                    <div className="menu-item"><a href="/commentlist"> <BsChatFill/> Comments</a></div>
                    <div className="menu-item"><a href="/userlist"> <BsFillPeopleFill/> User</a></div>
                    <div className="menu-item category">
                       <div><BsCardList/> Category</div> 
                       <div>
                         <BsChevronRight className={categoryArrowRight} onClick={openCategoryDropdown}/>
                         <BsChevronDown className={categoryArrowDown} onClick={closeCategoryDropdown}/>
                       </div>
                    </div>

                    <div className={categoryClassname}>
                        <div className="dropdown-item"><BsFillPersonPlusFill/> <a href="/addcategory">Add Category</a></div>
                        <div className="dropdown-item"> <BsFillEyeFill/> <a href="/categories"> Category List</a></div>
                    </div>
                    <div className="menu-item trailer">
                        <div> <BsFilm/> Trailer</div>
                       <div>
                         <BsChevronRight className={trailerArrowRight} onClick={openTrailerDropdown}/>
                         <BsChevronDown className={trailerArrowDown} onClick={closeTrailerDropdown}/>
                       </div>            
                    </div>

                    <div className={trailerClassname}>
                        <div className="dropdown-item"> <BsFillPersonPlusFill/> <a href="/addtrailer">Add Trailer</a></div>
                        <div className="dropdown-item"> <BsFillEyeFill/> <a href="/trailerlist">Trailer List</a></div>
                    </div>  
                    
                </div>


            </div>
            <div className="header-logo">
                <div className="menu" onClick={toggleMenu2}><GiHamburgerMenu/></div>
                <div><img src={logo} alt="logo"/></div>
                <div>ineTrail</div>
            </div>
            {/* <div>
                <input  className="search-bar" placeholder="Search"/>
            </div> */}
            <div>
                <img className="header-profile-img" src="https://i.postimg.cc/C13Ccsp0/christiana-rivers-O-XIv-Dy0pcs-unsplash.jpg" alt="pic"/>
            </div>
            
        </div>
    )
}
