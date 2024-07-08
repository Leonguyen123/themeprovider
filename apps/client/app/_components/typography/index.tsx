type TitleProps = {
    className?: string
    title: string
}

const H1 = <T, >(props: TitleProps) : React.JSX.Element =>  {
    const { title, className} = props
    return (<h1 className={className}>{title}</h1>)
}

const H2 = (props: TitleProps) : React.JSX.Element =>  {
    const { title, className} = props
    return (<h2 className={className}>{title}</h2>)
}

const H3 = (props: TitleProps) : React.JSX.Element =>  {
    const { title, className} = props
    return (<h3 className={className}>{title}</h3>)
}

const H4 = (props: TitleProps) : React.JSX.Element =>  {
    const { title, className} = props
    return (<h3 className={className}>{title}</h3>)
}

const H5 = (props: TitleProps) : React.JSX.Element =>  {
    const { title, className} = props
    return (<h3 className={className}>{title}</h3>)
}

const Paragraph = (props: TitleProps) : React.JSX.Element =>  {
    const { title, className} = props
    return (<h3 className={className}>{title}</h3>)
}

export { H1, H2, H3, H4, H5, Paragraph }