import "./bd1Page.css"
import BackButton from "../BackButton.jsx"
import bd1AlbumImage from "../assets/bd1/bd1_logo.jpg"
import bd1DawnImage from "../assets/bd1/bd1-dawn.jpg"
import bd1DuskImage from "../assets/bd1/bd1-dusk.jpg"

function BorderDayOne() {
    return(
        <div>
            <BackButton />
            <div className="bd1-title-wrapper">
                <h1 className="bd1-title">Border: Day One</h1>
            </div>

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
                        <li className="given-taken">Given-Taken</li>
                        <li>Let Me In (20 Cube)</li>
                        <li>10 Months</li>
                        <li>Flicker</li>
                        <li>Outro: Cross the Line</li>
                    </ol>
                </div>
                <h2 className="bd1-tracklist-description">Click on the star to view more information about the title track!</h2>
            </div>

            <div className="bd1-ca-title-wrapper">
                <h1 className="bd1-ca-title">CONCEPTS AND ALBUM VERSIONS</h1>
            </div>
        
            <div className="bd1-concept-images">
                <img className="bd1-dawn-image" src={bd1DawnImage} alt="Dawn Concept Photo"></img>
                <img className="bd1-dusk-image" src={bd1DuskImage} alt="Dusk Concept Photo"></img>
            </div>

            <div className="bd1-concept-images-text">
                <h2 className="dusk-text">DUSK</h2>
                <h2 className="dawn-text">DAWN</h2>
            </div>
        </div>
    )
}

export default BorderDayOne