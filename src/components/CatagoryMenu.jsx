import React from 'react'
import { NavLink } from 'react-router'

export default function CatagoryMenu({catagory}) {
  return (
    <div className="flex justify-center items-center gap-4 p-4 mx-auto">
          {catagory.map((item)=> <div key={item.categoryId}>
            <NavLink to={`catagory/${item.categoryName}`} className='btn'>{item.categoryName}</NavLink>
        </div>)}
        </div>
  )
}
