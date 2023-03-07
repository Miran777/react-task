import { ReactElement } from 'react'
import { Link, useMatch } from 'react-router-dom'

interface ICustomLink {
    children: React.ReactNode
    to: string
    props?: any
}

const CustomLink: React.FC<ICustomLink> = ({children, to, ...props}): ReactElement<ICustomLink> => {
    const match = useMatch(to)

    return (
        <Link
        to={to}
        className={match ? 'text-blue-500' : ''}
        >
            {children}
        </Link>
    )
}

export default CustomLink