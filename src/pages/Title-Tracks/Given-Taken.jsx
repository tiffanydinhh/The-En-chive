import "./Given-Taken.css"
import BackButton from "../../BackButton"
import bd1AlbumImage from "../../assets/bd1/bd1_logo.jpg"
import jungwonImage from "../../assets/jungwon.jpg"
import heeseungImage from "../../assets/heeseung.jpg"
import jayImage from "../../assets/jay.jpg"
import jakeImage from "../../assets/jake.jpg"
import sunghoonImage from "../../assets/sunghoon.jpg"
import sunooImage from "../../assets/sunoo.jpg"
import nikiImage from "../../assets/ni-ki.jpg"

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

            <div className="given-taken-lyrics-section">
                <div>
                    <h2 className="lyrics-title">LYRICS:</h2>
                    <p className="given-taken-lyrics">wake up in day one <br></br>
                        첫날의 아침 <br></br>
                        조명이 비춰 <br></br>
                        태양의 눈빛 <br></br>
                        그 빛은 날 불태웠지 <br></br>
                        그 빛은 나의 눈 가렸지 <br></br>
                        But I go now 꿈을 좇아 <br></br>
                        Dive into red sun, no lie <br></br>
                        수많은 stars 수많은 달 <br></br>
                        질문의 숲속을 헤매던 나 <br></br>
                        어둠 속의 저 빛을 따라왔어 <br></br>
                        가는 선 너머의 날 부르는 너 <br></br>
                        널 부르는 나 <br></br>
                        운명의 화살 비 속에서 <br></br>
                        (To) 마주한 내 안의 경계선 <br></br>
                        (Free) given or taken oh <br></br>
                        나의 붉은 눈빛 (to you) <br></br>
                        난 이제 세상을 뒤집어 <br></br>
                        (To) 하늘에 내 발을 내디뎌 <br></br>
                        (Me) given or taken oh <br></br>
                        내 하얀 송곳니 <br></br>
                        Oh 난 너에게 걸어가지 <br></br>
                        두 세계를 연결하지 <br></br>
                        나의 붉은 눈빛 <br></br>
                        Oh 난 너에게 걸어가지 <br></br>
                        신세계에 닿을 때까지 <br></br>
                        내 하얀 송곳니 <br></br>
                        내 뒤엔 수천 개의 의심 <br></br>
                        내 뒤엔 수만 개의 불신 <br></br>
                        But I go now 꿈을 좇아 <br></br>
                        Drive through the question for life <br></br>
                        주어짐과 쟁취함 사이 <br></br>
                        증명의 기로 위 남겨진 나 <br></br>
                        저 하늘을 우린 기다려왔어 <br></br>
                        가는 선 너머의 날 부르는 너 <br></br>
                        널 부르는 나 <br></br>
                        운명의 화살 비 속에서 <br></br>
                        (To) 마주한 내 안의 경계선 <br></br>
                        (Free) given or taken oh <br></br>
                        나의 붉은 눈빛 (to you) <br></br>
                        난 이제 세상을 뒤집어 <br></br>
                        (To) 하늘에 내 발을 내디뎌 <br></br>
                        (Me) given or taken oh
                        내 하얀 송곳니 <br></br>
                        Red blood 저 왕관에 <br></br>
                        That blood 흐르는 피 <br></br>
                        Red blood <br></br>
                        널 향한 내 손끝은 붉은빛에 물들어만 가 <br></br>
                        But I'm gonna go <br></br>
                        (To you) 운명의 화살 비 속에서 <br></br>
                        (To) 마주한 내 안의 경계선 <br></br>
                        (Free) given or taken oh <br></br>
                        나의 붉은 눈빛 (to you) <br></br>
                        난 이제 세상을 뒤집어 <br></br>
                        (To) 하늘에 내 발을 내디뎌 <br></br>
                        (Me) given or taken oh <br></br>
                        내 하얀 송곳니 <br></br>
                        Oh 난 너에게 걸어가지 <br></br>
                        두 세계를 연결하지 <br></br>
                        나의 붉은 눈빛 <br></br>
                        Oh 난 너에게 걸어가지 <br></br>
                        신세계에 닿을 때까지 <br></br>
                        내 하얀 송곳니 <br></br>
                    </p>
                </div>

                <div className="member-icons">
                    <img className="jungwon-image" src={jungwonImage}alt="jungwon-photo"></img>
                    <p> jungwon </p>

                    <img className="heeseung-image" src={heeseungImage}alt="heeseung-photo"></img>
                    <p> heeseung </p>

                    <img className="jay-image" src={jayImage}alt="jay-photo"></img>
                    <p> jay </p>

                    <img className="jake-image" src={jakeImage}alt="jake-photo"></img>
                    <p> jake </p>

                    <img className="sunghoon-image" src={sunghoonImage}alt="sunghoon-photo"></img>
                    <p> sunghoon </p>

                    <img className="sunoo-image" src={sunooImage}alt="sunoo-photo"></img>
                    <p> sunoo </p>

                    <img className="ni-ki-image" src={nikiImage}alt="ni-ki-photo"></img>
                    <p> ni-ki </p>

                </div>

                <div className="given-taken-lines">
                    <div class="rectangle gt-jungwon-line"></div>
                    <div class="rectangle gt-heeseung-line"></div>
                    <div class="rectangle gt-jay-line"></div>
                    <div class="rectangle gt-jake-line"></div>
                    <div class="rectangle gt-sunghoon-line"></div>
                    <div class="rectangle gt-sunoo-line"></div>
                    <div class="rectangle gt-ni-ki-line"></div>
                </div>

            </div>


        </div>
    )
}

export default GivenTaken