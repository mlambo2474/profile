import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'


const Header = () => {
  const Navigate = useNavigate()
  return (
 
    <div className='flex h-16 items-center justify-between'>
  <div className='flex flex-col px-4 text-xs sm:text-sm sm:px-2'>
    <p>generaltonde@gmail.com</p>
    <p>+27 61 310 1642</p>
  </div>
  <div className="flex items-center px-2 font-bold">
    {
      ["/", "skills", "about", "projects", "contact"].map((path, index) => {
        const labels = ["Home", "Services", "About", "Projects", "Contact"];
        return (
          <NavLink
            key={path}
            to={path === "/" ? "/" : `${path}`}
            className={({ isActive }) =>
              `px-2 py-1 mx-2 cursor-pointer transition duration-300 border-b-2
              ${isActive ? "border-white text-pink-200" : "border-transparent hover:text-indigo-500 hover:bg-pink-200 rounded-lg"}`
            }
          >
            {labels[index]}
          </NavLink>
        );
      })
    }
  </div>
</div>

  )
}

export default Header