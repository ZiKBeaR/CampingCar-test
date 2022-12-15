import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TuningItems } from '../../Data'
import "./Navbar.css"
import tuningfoto from '../../../assets/Tuning.png'
import * as Icons from 'react-icons/ai' 

const DropDownTuning = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
    <div className={dropdown ? "con clicked" : "con"} onClick={() => setDropdown(!dropdown)}>
     <div className='closeicon'><div><Icons.AiOutlineClose /></div></div>
      <div className='navbar'>
        {TuningItems.map((item) => {
          return (
          <div key={item.id} className={item.cName} onClick={() => setDropdown(false)}>
            <Link to={item.path}> <div> <img src={tuningfoto} alt='error' className='underline-tuning'></img> </div> <div> {item.name} </div> </Link>
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

export default DropDownTuning