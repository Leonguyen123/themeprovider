
type WrapperProps = {
    className?: string
    children: any
}

const Wrapper = (props : WrapperProps) : React.JSX.Element => {
    const { className, children } = props
    return (<div className={`px-8 ${className}`}>
        {children}
    </div>)
}

export default Wrapper
