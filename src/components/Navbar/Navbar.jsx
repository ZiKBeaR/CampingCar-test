import React, { useState } from 'react'
import { Data} from '../Data'
import { Cart, Center, Languages, Left, Logo, Logout, Myorders, NavBar, Navbartext, Right, Settings, Signin, User } from './style'
import cart from '../../assets/cart.png'
import user from '../../assets/user.png'
import downvector from '../../assets/downicon.png'
import rightvector from '../../assets/righticon.png'
import {Link} from 'react-router-dom'
import DropDownCaravan from './DropDown/NavbarCaravan'
import DropDownTuning from './DropDown/NavbarTuning'
import DropDownUsed from './DropDown/NavbarUsed'
import DropDownCampingPlase from './DropDown/NavbarCampingPlase'
import DropDownMotor from './DropDown/NavbarMotor'
import { FaBars, FaTimes } from 'react-icons/fa'
import DropDownMotorMobile from './DropDown/NavbarMotorMobail'
import DropDownCaravanTable from './DropDown/NavbarCaravanTable'
import DropDownTuningTable from './DropDown/NavbarTuningTable'
import DropDownUsedTable from './DropDown/NavbarUsedTable'
import DropDownCampingPlaseTable from './DropDown/NavbarCampingPlaseTable'



const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [click, setClick] = useState(false)
  return (
    <>
      <NavBar>

        <Left>
          <Link to='/' className='Linkk'><Logo>Camper</Logo></Link>
        </Left>

        <Center className={click ? 'nav-menu active' : 'nav-menu'}>
        {Data.map((item, index) => {
          if(item.name === "Motor") {
            return (
          <Navbartext key={index} 
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}>
            <Link to={item.href}>{item.name}</Link>
            <img src={downvector} alt='error' className='downicon'></img>
            <img src={rightvector} alt='error' className='righticon'></img>
            {dropdown && <DropDownMotor />}
            {dropdown && <DropDownMotorMobile />}
          </Navbartext>
           )
          }
          else if(item.name === "Caravan") {
            return (
          <Navbartext key={index} 
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
            <Link to={item.href}>{item.name}</Link>
            <img src={downvector} alt='error' className='downicon'></img>
            <img src={rightvector} alt='error' className='righticon'></img>
            {show && <DropDownCaravan />}
            {show && <DropDownCaravanTable />}
          </Navbartext>
           )
          }
          else if(item.name === "Tuning") {
            return (
          <Navbartext key={index} 
            onMouseEnter={() => setShow2(true)}
            onMouseLeave={() => setShow2(false)}>
            <Link to={item.href}>{item.name}</Link>
            <img src={downvector} alt='error' className='downicon'></img>
            <img src={rightvector} alt='error' className='righticon'></img>
            {show2 && <DropDownTuning />}
            {show2 && <DropDownTuningTable />}
          </Navbartext>
           )
          }
          else if(item.name === "Used Car") {
            return (
          <Navbartext key={index} 
            onMouseEnter={() => setShow3(true)}
            onMouseLeave={() => setShow3(false)}>
            <Link to={item.href}>{item.name}</Link>
            <img src={downvector} alt='error' className='downicon'></img>
            <img src={rightvector} alt='error' className='righticon'></img>
            {show3 && <DropDownUsed />}
            {show3 && <DropDownUsedTable />}
          </Navbartext>
           )
          }
          else if(item.name === "Camping Place") {
            return (
          <Navbartext key={index} 
            onMouseEnter={() => setShow4(true)}
            onMouseLeave={() => setShow4(false)}>
            <Link to={item.href}>{item.name}</Link>
            <img src={downvector} alt='error' className='downicon'></img>
            <img src={rightvector} alt='error' className='righticon'></img>
            {show4 && <DropDownCampingPlase />}
            {show4 && <DropDownCampingPlaseTable />}
          </Navbartext>
           )
          }
          else return(false);
            })}
          <Navbartext className='MobailNavbarText'><Signin>Sign in</Signin> </Navbartext>  
          <Navbartext className='MobailNavbarText'><Myorders>My orders</Myorders></Navbartext>  
          <Navbartext className='MobailNavbarText'><Logout>Log out</Logout></Navbartext> 
          <Navbartext className='MobailNavbarText'><Settings>Settings</Settings></Navbartext> 
          <Navbartext className='MobailNavbarText'><Languages>En<img src={downvector} alt='error'></img></Languages></Navbartext> 
        </Center>
        

        <Right>
          <Cart><img src={cart} alt='error'></img></Cart>
          <User><img src={user} alt='error'></img></User>
          <Languages>En<img src={downvector} alt='error'></img></Languages>
          <div className='hamburger' onClick={() => setClick(!click)}>
                {click ? (<FaTimes size={30} style={{ color: '#373737'}}  />) : (<FaBars size={30} style={{ color: '#373737' }} />)}
            </div>
        </Right>

      </NavBar>
      
    </>
  )
}

export default Navbar
