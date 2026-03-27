import "./bcImg.css"
import image from "../../assets/bc/bc_logo.jpg/"

function bcImage() {
    return(
        <img className="bcImage" src={image} alt="Border: Carnival Image"></img>
    )
}

export default bcImage