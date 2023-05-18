import React from 'react'
import Navbar from './navbar/Navbar'
import Head from 'next/head'
const layout = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}

export default layout
