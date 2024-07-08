import {
  Card as NextCard,
  CardHeader,
  CardBody,
  Image,
} from '@nextui-org/react'

export interface ICard {
  data: CarDataType
  className?: string
  onClick?: (e: CarDataType) => void
}

export type CarDataType = {
  id: number
  title?: string
  image: string
  url?: string
  author: string
}

const SlideBrandCard = (props: ICard): React.JSX.Element => {
  const { data, className } = props
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
          <p className='text-tiny uppercase font-bold mb-0'>{data?.author}</p>
        </div>
      </CardHeader>
    </NextCard>
  )
}

export { SlideBrandCard }
