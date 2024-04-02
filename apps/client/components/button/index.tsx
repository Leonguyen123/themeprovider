type ButtonProps = {
    title: string
    className?: string
    onClick?: () => void
}

const Button = (props: ButtonProps) : React.JSX.Element =>  {
    const {className, onClick, title} = props
    return ( <button onClick={onClick} className={className}>
    {title}
  </button>
  )
}

export { Button }