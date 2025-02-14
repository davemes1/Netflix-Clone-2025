import React from 'react'
import './Header.css'
import NetflixLogo from '../../assets/images/Netflix_Logo_PMS.png'
import { IoSearch } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className='header_outer_container'>
     <div className='header_container'>
        <div className='header_left'>
            <ul>
                <li><img src={NetflixLogo} alt="NetFlix Logo" width="100" /></li>
                
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        <div className= 'header_right'>
            <ul>
            <li><IoSearch/></li>
            <li><IoNotificationsOutline /></li>
            <li><MdContactPage /></li>
            <li><IoMenuSharp /></li>
           
            </ul>
        </div>
     </div>
     
    </div> 
  )
}
