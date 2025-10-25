import React, { use } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Link, } from 'react-router'

export default function Profile() {
  const {user} =use(AuthContext)
  if(!user){
    return <p>User not found go for login</p>
  }
  return (
    <div className='p-8 mx-auto flex flex-col justify-center items-center'>
      <img src={user?.photoUrl} alt="" />
      <p>{user?.email}</p>
      <Link to='/auth/register' className='btn'>Updata user Information</Link>
    </div>
  )
}
