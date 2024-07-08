import { Space } from 'antd'

interface IContainerProps {
  className?: string
  children: React.ReactNode
  fluid?: boolean
  space?: string 
}

const Container = (props: IContainerProps): React.ReactNode => {
  const { className, children, fluid, space} = props
  const responsiveClass = 'lg:max-w-screen-lg md:max-w-screen-md md:max-w-screen-md sm:max-w-screen-sm xl:max-w-screen-xl'
  const classDefault = fluid ? className : `${responsiveClass} ${className}`
  const spaces = space ? space : 'p-3'

  return (
    <div className={`${classDefault || ''} ${spaces} grid mx-auto`}>
      {children}
    </div>
  )
}

export default Container
