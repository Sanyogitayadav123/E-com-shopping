import React from 'react'
import Header from './Header'
import Footer from './footer'

const Layoute = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>

    </div>
  )
}

export default Layoute