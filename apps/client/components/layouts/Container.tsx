
type ContainerProps = {
    className?: string
    children: any
}

const Container = (props : ContainerProps) : React.JSX.Element => {
    const { className, children } = props
    return (<div className={`container ${className}`}>
        {children}
    </div>)
}

export default Container
