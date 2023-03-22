import React from 'react'
import LanguageDropdown from './LanguageDropdown'

const Header = () => {
  return (
    <div className='flex justify-between items-center mb-[100px]'>
        <div>
            <img src={process.env.PUBLIC_URL + "./images/logo.png"} alt="logo" />
        </div>
        <div>
            <LanguageDropdown/>
        </div>
    </div>
  )
}

export default Header