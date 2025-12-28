import "./Home.css"
import BorderDayOne from "../bd1Block.jsx"
import Image from "../bd1Img.jsx"

function Home() {
    return(
        <div>
            <p className="text">Select an album cover below to learn more about Enhypen's discography!</p>
            <BorderDayOne />
            <Image />
        </div>
    )
}

export default Home