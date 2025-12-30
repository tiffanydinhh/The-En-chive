import "./bd1Page.css"
import BackButton from "../BackButton.jsx"
import bd1AlbumImage from "../assets/Albums/bd1_logo.jpg"

function BorderDayOne() {
    return(
        <div>
            <BackButton />
            <h1 className="bd1-title">Border: Day One</h1>
            <img className="bd1-album-image" src={bd1AlbumImage} alt="Border Day One Album Image"></img>
            <p className="bd1-info"> release date</p>
        </div>
    )
}

export default BorderDayOne