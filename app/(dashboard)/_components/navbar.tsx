import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center gap-x-4 p-5 bg-green-500'>
      <div className='hidden lg:flex lg:flex-1 bg-yellow-300'>
        {/* <Search /> */}Search
      </div>
      {/* <div className='flex-1'><Notifications /></div> */}
      <UserButton />
    </div>
  )
}

export default Navbar
