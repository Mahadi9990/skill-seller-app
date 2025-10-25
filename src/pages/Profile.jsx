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
      <div className=" w-[200px] h-[200px] flex justify-center items-center mx-auto ">
        <img className='rounded-[100%]' src={user?.photoURL} alt="" />
      </div>
      <p className='py-3'>{user?.email}</p>
      <p className='py-3'>{user?.displayName}</p>
      <Link to='/auth/register' className='btn btn-success py-3'>Updata user Information</Link>
    </div>
  )
}
