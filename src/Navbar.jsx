import { useImperativeHandle } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return ( 
        <nav className="nav">
        <Link to="/" className="site-title">
            The En-chive
        </Link>
        <ul>
            <CustomLink to="/pricing">Pricing</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to) //convert relative paths to absolute paths (make full path)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true }) // end: true eliminates partial matching
    
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}