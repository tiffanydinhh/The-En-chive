import { useImperativeHandle } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import "./bd1Img.css"
import image from "../../assets/Albums/bd1_logo.jpg"

function bd1Image() {
    return(
        <Link to="/bd1">
            <img className="bd1Image" src={image} alt="Border: Day One Image"></img>
        </Link>
    )
}

export default bd1Image