import profilePic from "./assets/jungwon.jpg"
import "./Card.css"

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2>Kim Sunoo</h2>
            <p>I love enhypen, their music is PEAK</p>
        </div>
    )
}

export default Card