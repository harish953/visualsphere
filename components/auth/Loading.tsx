import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Image
        src='/logo.svg'
        alt='logo'
        width={120}
        height={120}
        className='animate-pulse duration-700'
      ></Image>
    </div>
  )
}

export default Loading
