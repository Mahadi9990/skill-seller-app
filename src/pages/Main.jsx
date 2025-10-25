import React from 'react'
import Footer from '../components/Footer'
import { Outlet, useNavigate } from 'react-router'
import Extra1Div from '../components/Extra1Div'
import Header from '../components/Header'
import Loading from './Loading'

export default function Main() {
  const {state} =useNavigate()
  return (
    <div>
        <Header/>
        {state == 'loading'?<Loading/>:<Outlet/>}
        <Extra1Div/>
        <Footer/>
    </div>
  )
}
