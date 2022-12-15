import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaravanItems } from '../../Data'
import "./Navbar.css"
import caravanfoto from '../../../assets/Caravanfoto.png'
import * as Icons from 'react-icons/ai' 

const DropDownCaravanTable = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
    <div className={dropdown ? "DropDownCaravanTableCon clicked" : "DropDownCaravanTableCon"} onClick={() => setDropdown(!dropdown)}>
     <div className='closeicon'><div><Icons.AiOutlineClose /></div></div>
      <div className='navbar'>
        {CaravanItems.slice(0,3).map((item) => {
          return (
          <div key={item.id} className={item.cName} onClick={() => setDropdown(false)}>
            <Link to={item.path}> <div> <img src={caravanfoto} alt='error' className='underline'></img> </div> <div> {item.name} </div> </Link>
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

export default DropDownCaravanTable