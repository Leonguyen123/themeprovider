
type ColProps = {
    children: React.JSX.Element
}

const Col = ({ children}: ColProps) : React.JSX.Element => {
    return (<div> {children} </div>)
}

export default Col
