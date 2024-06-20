import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlink({URL, children, title}) {
  return (
    <NavLink className={`relative flex items-center text-[#000] space-x-[20px]`} to={URL}>
        {children}
        <span className='text-[18px] leading-[20px] font-[600]'>{title}</span>
    </NavLink>
  )
}

export default Navlink