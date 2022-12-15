import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CampingPlaceItems } from '../../Data'
import "./Navbar.css"
import campingplacefoto from '../../../assets/campingplase.png'
import * as Icons from 'react-icons/ai' 

const DropDownCampingPlaseTable = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
    <div className={dropdown ? "DropDownCampingPlaseTableCon clicked" : "DropDownCampingPlaseTableCon"} onClick={() => setDropdown(!dropdown)}>
     <div className='closeicon'><div><Icons.AiOutlineClose /></div></div>
      <div className='navbar'>
        {CampingPlaceItems.slice(0,3).map((item) => {
          return (
          <div key={item.id} className={item.cName} onClick={() => setDropdown(false)}>
            <Link to={item.path}> <div> <img src={campingplacefoto} alt='error' className='underline'></img> </div> <div> {item.name} </div> </Link>
          </div>
          )
        })}
      </div>
      <div className='dropdownbtn'>
       <div className='btnseeall'>See all</div> 
      </div>
    </div>
    </>
  )
}

export default DropDownCampingPlaseTable 