type ButtonProps = {
    placeHolder?: string
    className?: string
    iconLeft?: React.JSX.Element
    iconRight?: React.JSX.Element
    onChange?: () => void
}

const PInput = (props: ButtonProps) : React.JSX.Element =>  {
    const {className, onChange, iconLeft, placeHolder, iconRight} = props
    return (
    <div className="flex rounded-3xl px-4 py-3 border-1 border-inherit">
        {iconLeft ? iconLeft : ''}
        <input className='pl-2 focus:outline-none text-current' placeholder={placeHolder} onChange={onChange}/>
        {iconRight ? iconRight : ''}
    </div>)
}

export { PInput }