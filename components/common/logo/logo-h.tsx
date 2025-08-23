import Image from 'next/image'
import React from 'react'

const LogoHorizontal = () => {
  return (
    <Image
     src={"/images/icons/logo-h.png"}
     width={1000}
     height={1000}
     alt='logo'
     priority
     className=''
    />
  )
}

export default LogoHorizontal