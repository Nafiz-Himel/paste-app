import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className = "flex flex-row gap-6 p-4 bg-gray-200 place-content-evenly">
      <NavLink
        to = "/"
      >
        Home
      </NavLink>

      <NavLink
        to = "/paste"
      >
        Paste
      </NavLink>
    </div>
  )
}

export default Navbar
