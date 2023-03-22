import React from 'react'

const Apple = ({title, img}) => {
  return (
    <button className='flex items-center pt-3 pb-3 pr-9 pl-9 bg-[#F0F5FA] rounded-lg hover:shadow-md'>
            <img className='mr-3' src={process.env.PUBLIC_URL + `./images/${img}.png`} alt="apple" />
            <span className='text-sm'>{title}</span>
    </button>
  )
}

export default Apple