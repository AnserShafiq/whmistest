import React from 'react'
import Logo from '../Images/Logo.png'

const Header = () => {
  return (
    <div className='flex justify-center items-center bg-[#f7f7f7b8] py-2 shadow-sm' >
        <img className='w-[18rem] lg:w-[20em]' src={Logo} alt='Unique Employment Solutions' />
    </div>
  )
}

export default Header