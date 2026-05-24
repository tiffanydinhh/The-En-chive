import "./Home.css"
import BorderDayOneBlock from "../Components/AlbumBlocks/bd1Block.jsx"
import BorderDayOneImage from "../Components/AlbumImages/bd1Img.jsx"
import BorderCarnivalBlock from "../Components/AlbumBlocks/bcBlock.jsx"
import BorderCarnivalImage from "../Components/AlbumImages/bcImg.jsx"

function Home() {
    return(
        <div>
            <p className="text">Select an album cover below to learn more about Enhypen's discography!</p>
            
            <BorderDayOneBlock />
            <div className="borderDayOneImg">
                <BorderDayOneImage />
            </div>

            <BorderCarnivalBlock />
            <div id="borderCarnivalImg">
                <BorderCarnivalImage />
            </div>
            

        </div>
    )
}

export default Home