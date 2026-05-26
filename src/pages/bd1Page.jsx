import "./albumPage.css"
import BackButton from "../BackButton.jsx"
import bd1AlbumImage from "../assets/bd1/bd1_logo.jpg"
import bd1DawnImage from "../assets/bd1/bd1-dawn.jpg"
import bd1DuskImage from "../assets/bd1/bd1-dusk.jpg"

import { useImperativeHandle } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function BorderDayOne() {
    return(
        <div>
            <BackButton />
            <div className="title-wrapper">
                <h1 className="title">Border: Day One</h1>
            </div>

            <div className="album-section">
                <img className="album-image" src={bd1AlbumImage} alt="Border Day One Album Image"></img>
                
                <div className="album-info">
                    <p className="info1"> <b>RELEASE DATE: </b>November 30, 2020</p>
                    <p className="info2"> <b>ALBUM SUMMARY: </b>
                        Border: Day One is Enhypen's debut mini-album. It tells the story of the seven members crossing a border from their past, 
                        the survival show that formed the group, I-LAND. It represents the transition from trainees to artists, and explores 
                        the themes of uncertainty, connection, and growth.
                    </p>

                    <p className="info3"> <b>ACHIEVEMENTS: </b>
                        <ul>
                            <li>Best-selling debut album for a K-pop group in 2020.</li>
                            <li>The title track, Given-Taken, is the most streamed debut song by a boy group.</li>
                            <li>Set a record for the highest first-week sales for a K-pop group debuting in 2020.</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="tracklist-section">
                <div className="tracklist">
                    <h1 className="tracklist-title">TRACKLIST</h1>

                    <ol className="tracklist-songs">
                        <li>Intro: Walk the Line</li>

                        <Link to="/giventaken">
                            <li className="title-song">Given-Taken</li>
                        </Link>

                        <li>Let Me In (20 Cube)</li>
                        <li>10 Months</li>
                        <li>Flicker</li>
                        <li>Outro: Cross the Line</li>
                    </ol>
                </div>
                <h2 className="tracklist-description">Click on the star to view more information about the title track!</h2>
            </div>

            <div className="ca-title-wrapper">
                <h1 className="ca-title">CONCEPTS AND ALBUM VERSIONS</h1>
            </div>
        
            <div className="concept-images">
                <img className="concept-image1" src={bd1DawnImage} alt="Dawn Concept Photo"></img>
                <img className="concept-image2" src={bd1DuskImage} alt="Dusk Concept Photo"></img>
            </div>

            <div className="concept-images-text">
                <h2 className="concept-image1-text">DUSK</h2>
                <h2 className="concept-image2-text">DAWN</h2>
            </div>
        </div>
    )
}

export default BorderDayOne