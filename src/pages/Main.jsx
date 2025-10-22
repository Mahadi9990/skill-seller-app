import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import Extra1Div from '../components/Extra1Div'

export default function Main() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Extra1Div/>
        <Footer/>
    </div>
  )
}
