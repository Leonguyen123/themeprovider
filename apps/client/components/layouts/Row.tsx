
type rowProps = {
    span?: string
    cols: number
    gap?: Number
    flow?: string
    children: any
}

const Row = ({ children, cols, gap, flow }: rowProps) : React.JSX.Element => {
    const className = `grid grid-cols-${cols || 0} ${flow || 'grid-flow-row'} gap-${gap || 0}`;
    return (<div className={className}>
        {children}
    </div>)
}

export default Row
