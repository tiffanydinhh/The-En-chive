import "./albumPage.css"
import BackButton from "../BackButton.jsx"
import bcAlbumImage from "../assets/bc/bc_logo.jpg"

import { useImperativeHandle } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function BorderCarnival() {
    return(
        <div>
            <BackButton/>

            <div className="title-wrapper">
                <h1 className="title">Border: Carnival</h1>
            </div>

            <div className="album-section">
                <img className="album-image" src={bcAlbumImage} alt="Border: Carnival Album Image"></img>
                
                <div className="album-info">
                    <p className="info1"> <b>RELEASE DATE: </b> April 26, 2021</p>
                    <p className="info2"> <b>ALBUM SUMMARY: </b>
                        Border: Carnival is Enhypen's second EP. It revolves around the members' sudden rise to fame and success, 
                        after their debut. They compare their newfound idol life to a "carnival" where everything is exciting and unfamiliar.
                    </p>

                    <p className="info3"> <b>ACHIEVEMENTS: </b></p>
                        <ul>
                            <li>Earned the group's first-ever Billboard 200 entry.</li>
                            <li>Debuted at No. 1 on the Oricon Albums Chart.</li>
                            <li>Hit No. 1 on the Worldwide iTunes Album Chart.</li>
                        </ul>
                </div>
            </div>

            <div className="tracklist-section">
                <div className="tracklist">
                    <h1 className="tracklist-title">TRACKLIST</h1>

                </div>
            </div>

        </div>
    )
}

export default BorderCarnival