import "./Given-Taken.css"
import BackButton from "../../BackButton"
import bd1AlbumImage from "../../assets/bd1/bd1_logo.jpg"

function GivenTaken() {
    return(
        <div>
            <BackButton />
            <div className="given-taken-title-wrapper">
                <h1 className="given-taken-title">Given-Taken</h1>
            </div>

            <div className="given-taken-info-section">

                <img className="bd1-album-image" src={bd1AlbumImage} alt="Border Day One Album Image"></img>

                <div className="given-taken-info">                    
                    <p className="given-taken-info1"><b>GENRE: </b>Electropop, Dance-Pop, Hip Hop, and Contemporary R&B</p>
                    
                    <p className="given-taken-info2"><b>PRODUCERS: </b>Wonderkid and Bang Shi-hyuk (Hitman Bang)</p>
                    
                    <p className="given-taken-info3"><b>MEANING BEHIND SONG: </b>The song explores the uncertainty and doubt of their newfound success after the survival show, I-LAND. 
                        The members question whether they were "given" their debut by the fan votes on I-LAND, or if they "took" the opportunity through their own hardwork and determination.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default GivenTaken