"use client";

import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@components/button'
import { PInput } from '@components/input'
import Logo from '@main/assets/images/logo.png'

type menuType = {
    link: string
    name: string
}

const menus: menuType[] = [
    {link: '/', name: 'Home'},
    {link: '/', name: 'Jobs'},
    {link: '/', name: 'Find talent'},
]

const icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-inherit">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>


const Header = ({ classOption } : any) => {
    return (
           <div className="container py-3">
                <div className="flex items-center">
                    <div className="flex-1">
                        {
                            menus.map((menu => {
                                return (<Link className="mr-6 py-6 text-lg text-black no-underline" href={menu.link}>{menu.name}</Link>)
                            }))
                        }
                    </div>
                    <div className="flex-1 m-auto">
                        <Image
                            className="m-auto"
                            src={Logo}
                            width={200}
                            height={200}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="contents flex-1 text-right logo">
                        <PInput placeHolder="Search..." className='flex' iconLeft={icon}/>
                        <Button title="Login" className="rounded-3xl px-5 py-3"/>
                        <Button title="Sign Up" className="rounded-3xl px-4 py-3 bg-black font-medium text-white"/>
                    </div>
                </div>
           </div>
    )
};

export default Header;
