import "./bd1Page.css"
import BackButton from "../BackButton.jsx"
import bd1AlbumImage from "../assets/Albums/bd1_logo.jpg"
import star from "../assets/star.png"

function BorderDayOne() {
    return(
        <div>
            <BackButton />
            <h1 className="bd1-title">Border: Day One</h1>

            <div className="bd1-album-section">
                <img className="bd1-album-image" src={bd1AlbumImage} alt="Border Day One Album Image"></img>
                
                <div className="bd1-album-info">
                    <p className="bd1-info1"> <b>RELEASE DATE: </b>November 30, 2020</p>
                    <p className="bd1-info2"> <b>ALBUM SUMMARY: </b>
                        Border: Day One is Enhypen's debut album. It tells the story of the seven members crossing a border from their past, 
                        the survival show that formed the group, I-LAND. It represents the transition from trainees to artists, and explores 
                        the themes of uncertainty, connection, and growth.
                    </p>

                    <p className="bd1-info3"> <b>ACHIEVEMENTS: </b>
                        <ul>
                            <li>Best-selling debut album for a K-pop group in 2020.</li>
                            <li>The title track, Given-Taken, is the most streamed debut song by a boy group.</li>
                            <li>Set a record for the highest first-week sales for a K-pop group debuting in 2020.</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="bd1-tracklist-section">
                <div className="bd1-tracklist">
                    <h1 className="bd1-tracklist-title">TRACKLIST</h1>

                    <ol className="bd1-tracklist-songs">
                        <li>Intro: Walk the Line</li>
                        <li>Given-Taken</li>
                        <li>Let Me In (20 Cube)</li>
                        <li>10 Months</li>
                        <li>Flicker</li>
                        <li>Outro: Cross the Line</li>
                    </ol>
                </div>
                <h2 className="bd1-tracklist-description">Click on the star to view more information about the title track!</h2>
            </div>

        </div>
    )
}

export default BorderDayOne