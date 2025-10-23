import React from 'react'
import { Link, useLoaderData } from 'react-router'

export default function No() {
    const data =useLoaderData()
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.map((item) => (
        <div
          key={item.skillId}
          className="border rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
        >
          <img
            src={item.image}
            alt={item.skillName}
            className="w-full h-48 object-cover rounded-xl"
          />
          <h2 className="text-xl font-semibold mt-3">{item.skillName}</h2>
          <p className="text-gray-500 text-sm">{item.category}</p>
          <p className="mt-2 text-gray-600">{item.description}</p>

          <div className="flex justify-between items-center mt-4 text-sm">
            <span>⭐ {item.rating}</span>
            <span>💰 ${item.price}</span>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Slots: {item.slotsAvailable}
          </p>

          <Link to={`/skills/${item.skillId}`} className="btn mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Enroll
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}
