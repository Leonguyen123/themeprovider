
interface IProps {
  className?: string
  children: React.ReactNode
}

const Row = (props: IProps): React.ReactNode => {
  const { className, children } = props
  return (
    <div className={`grid ${className}`}>
      {children}
    </div>
  )
}

export default Row
