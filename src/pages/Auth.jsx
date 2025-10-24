import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/header'

export default function Auth() {
  return (
    <div className='w-11/12 mx-auto'>
        <Outlet/>
    </div>
  )
}
