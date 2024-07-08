import {
  Card as NextCard,
  CardHeader,
  CardBody,
  Image,
} from '@nextui-org/react'
import { FaEye, FaHeart } from "react-icons/fa";
import { Link } from '@nextui-org/react';

interface ICard {
  data: CarDataType
  className?: string
  onClick?: (e: CarDataType) => void
}

type CarDataType = {
  id: number
  title?: string
  image: string
  url?: string
  author: string
}

const Card = (props: ICard): React.JSX.Element => {
  const { data, onClick, className } = props
  return (
    <NextCard className={`${className || ''} py-2 shadow-none`}>
      <CardBody className='w-full py-2'>
        <Image
          alt={data?.title}
          className='object-cover rounded-xl cursor-pointer'
          src={data?.image}
          width={'100%'}
        />
      </CardBody>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center'>
            <p className='text-tiny uppercase font-bold mb-0'>{data?.author}</p>
            <small className='text-default-500'>12 Tracks</small>
          </div>
          <div className='flex'>
            <Link className='text-gray'><FaEye/></Link>
            <Link className='ml-1 text-gray text-xs'><FaHeart/></Link>
          </div>
        </div>
        {onClick ? (
          <h4
            onClick={() => onClick(data)}
            className='cursor-pointer font-bold text-base text-left py-2'
          >
            {data?.title}
          </h4>
        ) : (
          <h4 className='cursor-pointer font-bold text-large text-left py-2'>
            {data?.title}
          </h4>
        )}
      </CardHeader>
    </NextCard>
  )
}

export { Card }
