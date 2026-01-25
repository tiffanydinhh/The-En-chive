import "./MemberIcons.css"

import jungwonImage from "../assets/jungwon.jpg"
import heeseungImage from "../assets/heeseung.jpg"
import jayImage from "../assets/jay.jpg"
import jakeImage from "../assets/jake.jpg"
import sunghoonImage from "../assets/sunghoon.jpg"
import sunooImage from "../assets/sunoo.jpg"
import nikiImage from "../assets/ni-ki.jpg"


function MemberIcons() {

    return(
        <div className="member-icons">
            <img className="jungwon-image" src={jungwonImage}alt="jungwon-photo"></img>
            <p className="jungwon-text"> JUNGWON </p>

            <img className="heeseung-image" src={heeseungImage}alt="heeseung-photo"></img>
            <p className="heeseung-text"> HEESEUNG </p>

            <img className="jay-image" src={jayImage}alt="jay-photo"></img>
            <p className="jay-text"> JAY </p>

            <img className="jake-image" src={jakeImage}alt="jake-photo"></img>
            <p className="jake-text"> JAKE </p>

            <img className="sunghoon-image" src={sunghoonImage}alt="sunghoon-photo"></img>
            <p className="junsunghoongwon-text"> SUNGHOON </p>

            <img className="sunoo-image" src={sunooImage}alt="sunoo-photo"></img>
            <p className="sunoo-text"> SUNOO </p>

            <img className="ni-ki-image" src={nikiImage}alt="ni-ki-photo"></img>
            <p className="ni-ki-text"> NI-KI </p>

        </div>
    )
}

export default MemberIcons