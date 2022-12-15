import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UsedItems } from '../../Data'
import "./Navbar.css"
import usedfoto from '../../../assets/Usedcar.png'
import * as Icons from 'react-icons/ai' 

const DropDownUsed = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
    <div className={dropdown ? "con clicked" : "con"} onClick={() => setDropdown(!dropdown)}>
     <div className='closeicon'><div><Icons.AiOutlineClose /></div></div>
      <div className='navbar'>
        {UsedItems.map((item) => {
          return (
          <div key={item.id} className={item.cName} onClick={() => setDropdown(false)}>
            <Link to={item.path}> <div> <img src={usedfoto} alt='error' className='underline'></img> </div> <div> {item.name} </div> </Link>
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

export default DropDownUsed