import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="flex justify-center md:justify-start items-center w-full container mx-auto py-5">
      <Link href={'/'}>
        <Image
          src={'/assets/Logo-promarketing-transformed.png'}
          height={80}
          width={280}
          alt='Logo promarketing'
          className="bg-white rounded-lg"
        />
      </Link>
    </header>
  )
}
