import Image from 'next/image'
import React from 'react'

const LogoHorizontal = () => {
  return (
    <Image
     src={"/images/icons/logo-h.png"}
     width={100}
     height={100}
     alt='logo'
     priority
     className='h-full w-full'
    />
  )
}

export default LogoHorizontal