import "./Home.css"
import BorderDayOne from "../Components/AlbumBlocks/bd1Block.jsx"
import Image from "../Components/AlbumImages/bd1Img.jsx"

function Home() {
    return(
        <div>
            <p className="text">Select an album cover below to learn more about Enhypen's discography!</p>
            <div className="BorderDayOneBlock">
                <BorderDayOne />
            </div>
            <Image />
        </div>
    )
}

export default Home