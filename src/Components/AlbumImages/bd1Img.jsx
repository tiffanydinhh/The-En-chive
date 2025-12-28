import { useImperativeHandle } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import image from "../../assets/jungwon.jpg"

function Image() {
    return(
        <Link to="/about">
            <img src={image} alt="image"></img>
        </Link>
    )
}

export default Image