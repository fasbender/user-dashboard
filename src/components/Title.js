import React from 'react'

const Title = ({title_1, title_2}) => {
  return (
    <>
        <span className='text-2xl block font-bold'>{title_1}</span>
        <span className='text-[#B0B7C3]'>{title_2}</span>
    </>
  )
}

export default Title