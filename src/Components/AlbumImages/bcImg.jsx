import { useImperativeHandle } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import "./bcImg.css"
import image from "../../assets/bc/bc_logo.jpg/"

function bcImage() {
    return(
        <Link to="/bc">
            <img className="bcImage" src={image} alt="Border: Carnival Image"></img>
        </Link>
    )
}

export default bcImage