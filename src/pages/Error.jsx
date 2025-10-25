import React from 'react'
import { Link } from 'react-router'

export default function ErrorPage() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img className='h-72' src={'283328-P6EPD4-346.jpg'} alt="" />
      <h1 className='py-3 text-4xl text-center'>Oops, Slug not found!</h1>
      <p className='py-3 text-xl text-center'>The page you are looking for is not available.</p>
      <Link className='btn btn-primary' to={'/'}>Go back</Link>
    </div>
  )
}
