import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

import { CustomButton } from '.'

export const NavBar = () => {
  return (
<header className='w-full absolute z-10 ' style={{padding: "30px"}}>
  <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent ' 
  style={{marginRight: "auto" , marginLeft: "auto" , display: "flex" , justifyContent: "space-between"}}>
    <a href='/' className='flex justify-center items-center'>
      <Image src='/logo.svg' className='object-contain' alt='logo'
        width={118}
        height={18}/>
    </a>

    <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='bg-primary-blue rounded-full bg-white min-w-[130px]'
      />
      
    
  </nav>
</header>


  )
}
