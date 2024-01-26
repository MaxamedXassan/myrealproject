import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
       <nav className='flex justify-between items-center bg-slate-800 px-8 py-3 '>
        <Link className='text-white font-bold ' href={"/"}>AMAAHE.</Link>
       About
      </nav>
    </>
  )
}

export default Navbar
