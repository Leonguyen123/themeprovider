
interface IColProps {
  className?: string
  children: React.ReactNode
}

const Col = (props: IColProps): React.ReactNode => {
  const { className, children } = props
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Col
