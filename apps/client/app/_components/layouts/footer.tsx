'use client'

import { Container } from '@main/app/_components/layouts'
import {Image} from "@nextui-org/image";

const Footer = () : React.JSX.Element => {

    return (
    <Container className='px-3 py-3'>
       <Image
        width={140}
        src="https://i.ibb.co/CWzp07y/logo.png"
        alt="NextUI Album Cover"
        className="m-5"
      />
    </Container>
    )
}

export default Footer
