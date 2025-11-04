import React from 'react'

const Footer = () => {
   const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col text-xs text-white p-4 ">
          <span> Developed by tondev&copy;</span>
          <span>All rights reserved { currentYear}</span>
          <span>generaltonde@gmail.com</span>
    </div>
  )
}

export default Footer