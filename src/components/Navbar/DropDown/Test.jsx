import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Data } from '../../Data';
import Motor from '../../Motor/Motor'
import DropDownTest from './NavbarMotor';

const Test = () => {
  return (
    <>
    <BrowserRouter>
        <DropDownTest/>
      <Routes>
      {Data.map((item) => {
        return (
        <Route path={item.path} element={<Motor />} key={item.id}></Route>
        )
      })}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Test