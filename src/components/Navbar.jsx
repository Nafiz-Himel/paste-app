import React from 'react'

const Navbar = () => {
  return (
    <div className = "flex flex-row gap-4 p-4 bg-gray-200">
      <NavLink>
        Home
      </NavLink>

      <NavLink>
        Paste
      </NavLink>
    </div>
  )
}

export default Navbar
