import React from 'react'
import About from '../Shared/Components/About/About'
import HelmetComponent from './Helmet/HelmetProvider'

function Abouts() {
  return (
    <>
      <HelmetComponent title="About - International Journal of Embedded Systems and IoT" />
      <About />
    </>
  )
}

export default Abouts