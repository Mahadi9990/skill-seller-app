import React from 'react'
import { Outlet } from 'react-router'

export default function Auth() {
  return (
    <div className='w-11/12 mx-auto'>
        <Outlet/>
    </div>
  )
}
