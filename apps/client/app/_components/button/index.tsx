import { Button as NextUIButton, ButtonProps } from '@nextui-org/react'
type Props = {
  className?: string
} & ButtonProps

const IButton = (props: Props): React.JSX.Element => {
  const { children } = props
  return (
    <NextUIButton {...props} className=''>
      {children}
    </NextUIButton>
  )
}

export { IButton }
