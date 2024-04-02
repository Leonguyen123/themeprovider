
import Image from 'next/image'
import { Paragraph } from '../typography' 

type CardProps = {
    data: CarDataType
}

type CarDataType = {
    title?: string
    image: any
    url?: string
    author: string
}

const Card = (props : CardProps) : React.JSX.Element =>  {
    const { data } = props
    return ( <div>
                <div className='relative'>
                    <Image
                        className="m-auto w-full" 
                        src={data?.image}
                        alt="Picture of the author"
                        style={{objectFit:"cover"}}
                    />
                    <div className="absolute w-full bottom-0 p-2 bg-gradient-to-t from-black">
                        <Paragraph className="text-base font-normal text-white" title={data?.author}/>
                    </div>
                </div>
            {data?.title}
    </div>
  )
}

export { Card }