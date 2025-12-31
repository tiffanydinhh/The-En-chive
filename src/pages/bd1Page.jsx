import "./bd1Page.css"
import BackButton from "../BackButton.jsx"
import bd1AlbumImage from "../assets/Albums/bd1_logo.jpg"

function BorderDayOne() {
    return(
        <div>
            <BackButton />
            <h1 className="bd1-title">Border: Day One</h1>
            <img className="bd1-album-image" src={bd1AlbumImage} alt="Border Day One Album Image"></img>
            <p className="bd1-info1"> <b>RELEASE DATE: </b>November 30, 2020</p>
            <p className="bd1-info2"> <b>ALBUM SUMMARY: </b>
                Border: Day One is Enhypen's debut album. It tells the story of the seven members crossing a border from their past, 
                the survival show that formed the group, I-LAND. It represents the transition from trainees to artists, and explores 
                the themes of uncertainty, connection, and growth.
            </p>
            <p className="bd1-info3"> 
                <b>ACHIEVEMENTS: </b>
                <ul>
                    test
                </ul>
            </p>

        </div>
    )
}

export default BorderDayOne