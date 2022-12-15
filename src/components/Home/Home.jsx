import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import { Con } from './HomeStyle'
import carusel1 from '../../assets/carusel1.png'
import carusel2 from '../../assets/carusel2.png'
import carusel3 from '../../assets/carusel3.png'
import Example from './Carusel'


const Home = () => {
  return (
    <>
      <Con>
      <img src={carusel1} alt="error" />
      {/* <Example /> */}
      {/* <UncontrolledCarousel
  items={[
    {
      key: 1,
      src: carusel1
    },
    {
      key: 2,
      src: carusel2
    },
    {
      key: 3,
      src: carusel3
    }
  ]}
 /> */}
 
      </Con>
    </>
  )
}

export default Home