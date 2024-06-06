import React from 'react'
import { text } from 'stream/consumers'

const Button = ({text}: {text: string}) => {
  return (
    <button className='bg-gray-100 py-3 px-5 rounded-sm text-black w-fit text-xl'>{text}</button>
  )
}

export default Button