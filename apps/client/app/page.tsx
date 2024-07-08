'use client'

import { useState } from 'react'
import { Card } from '@main/app/_components/card'
import { Container } from '@main/app/_components/layouts'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Spacer,
} from '@nextui-org/react'
import { Image } from '@nextui-org/image'
import Marquee from 'react-fast-marquee'
import { SlideBrandCard } from './_components/card/slider'
const posts = [
  {
    id: 1,
    image:
      'https://cdn.dribbble.com/userupload/14270970/file/original-f3d79ae86c66ba6ca681f8bba8b91bab.jpg?resize=400x300&vertical=center',
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 2,
    image:
      'https://cdn.dribbble.com/userupload/14270970/file/original-f3d79ae86c66ba6ca681f8bba8b91bab.jpg?resize=400x300&vertical=center',
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 3,
    image:
      'https://cdn.dribbble.com/userupload/14252444/file/original-1b41d0f34eddf1cc87e4df0d38b1d980.jpg?resize=400x300&vertical=center',
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 4,
    image:
      'https://cdn.dribbble.com/userupload/14286580/file/original-6e9c8e16c303187731afbe1378d8c7bd.jpg?resize=400x300&vertical=center',
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 5,
    image:
      'https://cdn.dribbble.com/userupload/14319287/file/original-6ba466c98db5e8479f5b06ed1d872c1c.png?resize=400x300&vertical=center',
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 6,
    image:
      'https://cdn.dribbble.com/userupload/14207096/file/original-4647fcadb680f9c34c4d7515c87c85af.jpg?resize=400x300&vertical=center',
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 7,
    image:
      'https://cdn.dribbble.com/userupload/14211032/file/original-0ec2f078aa4a12a93c170dd7d2883941.jpg?resize=400x300&vertical=center',
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 8,
    image: 'https://cdn.dribbble.com/userupload/14319287/file/original-6ba466c98db5e8479f5b06ed1d872c1c.png?resize=400x300&vertical=center',
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
]

export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedItem, setSelectedItem] = useState<any>({})

  const handleOpen = item => {
    setSelectedItem(item)
    onOpen()
  }

  return (
    <>
      <Container space='py-10'>
        <div className='py-20 text-center'>
          <Button
            className='bg-yellow-500 text-black text-base rounded-full'
            radius='lg'
            color='primary'
            size='md'
          >
            Lover 3 million ready-to-work creatives large
          </Button>
          <h1 className='mx-2 my-3'>
            Work with the world’s top creative talent
          </h1>
          <p className='text-base'>
            Connect with millions of top-rated designers & agencies around the
            world.
          </p>
          <Button
            className='bg-black yellow-500 text-base rounded-full'
            radius='lg'
            color='primary'
            size='md'
          >
            Get started
          </Button>
        </div>
      </Container>
      <Container fluid>
        <h1 className='text-center mx-2 my-3'>Explore inspiring designs</h1>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
          {posts.map(val => (
            <Card key={val.id} data={val} onClick={handleOpen} />
          ))}
        </div>
        <Button
          className='my-5 justify-self-center bg-white text-black mx-2 rounded-full text-base border-2'
          color='primary'
          size='lg'
        >
          Browse more
        </Button>
      </Container>

      <Container space='px-20 py-50' fluid className='bg-yellow-2'>
        <div className='text-center'>
          <h2 className='mx-2 my-3'>Find your next designer today</h2>
          <p className='text-base'>
            The world’s leading brands use Dribbble to hire creative talent.
            Browse millions of top-rated portfolios to find your perfect
            creative match.
          </p>
        </div>
        <div className='text-center justify-between py-4'>
          <Button
            className='text-white bg-black mx-2 rounded-full'
            radius='lg'
            color='primary'
            size='md'
          >
            Get started
          </Button>
          <Button
            className='bg-white text-black mx-2 rounded-full'
            radius='lg'
            color='primary'
            size='md'
          >
            Learn about hiring
          </Button>
        </div>
        <div className='text-center'>
          <h3 className='text-xl'>Are you designer ? Join us</h3>
        </div>
      </Container>
      <Container fluid space='py-10'>
        <Marquee>
          {posts.map(val => (
            <SlideBrandCard
              className='w-64'
              key={val.id}
              data={val}
              onClick={handleOpen}
            />
          ))}
        </Marquee>
      </Container>
      <Modal
        size='full'
        isOpen={isOpen}
        onClose={onClose}
        placement='bottom-center'
        className='bg-unset'
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'></ModalHeader>
              <ModalBody className='bg-white'>
                <Container>
                  <h2>{selectedItem?.title}</h2>
                  <p className='text-tiny uppercase font-bold'>
                    {selectedItem?.author}
                  </p>
                  <small className='text-default-500'>12 Tracks</small>
                  <Spacer y={4} />
                  <Image
                    alt={selectedItem?.title}
                    className='object-cover rounded-xl cursor-pointer'
                    src={selectedItem?.image}
                    width={'100%'}
                  />
                </Container>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
