'use client'

import { Container } from '@main/app/_components/layouts'
import React  from 'react'
import { Input } from '@nextui-org/react'
import { Image } from '@nextui-org/image'
import Link from 'next/link'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <Container fluid>
      <div className='flex justify-content-between items-center'>
        <div>
          <Image
            width={240}
            src='https://i.ibb.co/CWzp07y/logo.png'
            alt='NextUI Album Cover'
            className='m-5'
          />
        </div>
        <div className='flex items-center'>
          <div className='flex-none'>
            <Input
              type='email'
              placeholder='Tìm kiếm'
              labelPlacement='outside'
              startContent={
                <IoIosSearch className='me-2 text-xl text-bold text-default-400 pointer-events-none flex-shrink-0' />
              }
            />
          </div>
          <div className='ml-5 flex flex-1 h-5 items-center space-x-4 text-small'>
            <Link className='no-underline text-black text-base' href='/'>Home</Link>
            <Link className='no-underline text-black text-base' href='/about'>About Us</Link>
            <Link className='no-underline text-black text-base' href='/blog/hello-world'>Blog Post</Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Header
