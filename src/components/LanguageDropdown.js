/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const LanguageDropdown = () => {

    const languages = ["English (US)", "Bengali", "Italian", "Spanish"]

  return (
    <> 
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-[#B0B7C3] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center bg-[#F0F5FA] hover:bg-[#dbe6f0]" type="button">English (UK) <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        {/* <!-- Dropdown menu --> */}
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-[#B0B7C3] dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                {languages.map((language, index) => {
                    return (
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" key={index}>{language}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default LanguageDropdown