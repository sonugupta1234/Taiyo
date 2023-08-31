import React from 'react'
import {Link} from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-1/5 h-screen p-4 ">
        <h1 className="text-xl font-semibold mb-4">Sidebar</h1>
        <ul>
            <Link to="/"><li className="mb-2 mt-20 hover:text-gray-400">Contact</li></Link>
            <Link to="/charts"><li className="mb-2 mt-4 hover:text-gray-400">Charts and Maps</li></Link>
           
        </ul>
       </div>
  )
}
