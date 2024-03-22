

import Header from './Header';
import React from 'react'
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
    <Header/>
   <div><h1>{children}</h1> </div> 
   {/* <Footer/> */}
   </>
  )
}

export default Layout

