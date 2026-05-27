import "./TitleTrack.css"
import BackButton from "../../BackButton"
import bcAlbumImage from "../../assets/bc/bc_logo.jpg"
import MemberIcons from "../../Components/MemberIcons.jsx"

function DrunkDazed() {
    return(
        <div>
            <BackButton />
            <div className="title-wrapper">
                <h1 className="titletrack-title">Drunk-Dazed</h1>
            </div>

            <div className="titletrack-info-section">

                <img className="album-image" src={bcAlbumImage} alt="Border: Carnival Album Image"></img>

                <div className="titletrack-info">
                    <p><b>GENRE: </b>Pop-Rock and Electropop</p>

                    <p><b>PRODUCERS: </b>Wonderkid and Bang Shi-hyuk (Hitman Bang)</p>

                    <p><b>MEANING BEHIND SONG: </b>The song is a metaphor for the overwhelming rise to fame that feels like a dizzying carnival. 
                    The "drunk" feeling represents the excitement that comes with fame, while the "dazed" feeling represents the confusion that comes with that life.
                    </p>
                </div>
            </div>

            <div className="titletrack-lyrics-section">
                <div>
                    <h2 className="lyrics-title">LYRICS:</h2>
                    <p className="titletrack-lyrics">

                        아름답고 황홀해 <br></br>
                        반짝이는 내 각막은 다이아몬드 <br></br>
                        규칙 없는 세계는 <br></br>
                        전부 뒤집혀, 뒤집혀 서 있어 <br></br>
                        Turning up the party (now) <br></br>
                        하늘엔 내 발이 (wow) <br></br>
                        사람들은, "Ha-ha" (high) <br></br>
                        내 귓속에는, "La-la" (loud) <br></br>
                        눈부셔, baby, 이 조명 shining <br></br>
                        We′re in love with this carnival <br></br>
                        사실 무서워 난 <br></br>
                        출렁이는 잔 속 이 취한 세계 <br></br>
                        그 끝엔 목이 타는 내 맘 <br></br>
                        But I just wanna stay <br></br>
                        느껴져, 내 머린 daze, daze, daze <br></br>
                        중독에 빠져, replay, play, play <br></br>
                        원함 원하는 대로 갈 때까지 가봐, go <br></br>
                        나를 가둔 carnival, wow, wow <br></br>
                        (다시 내 심장이) daze, daze, daze <br></br>
                        Can't control my body, dance, dance, dance <br></br>
                        달콤한 이 향기도 붉은빛 송곳니도 <br></br>
                        즐겨봐 이 carnival, wow, wow <br></br>
                        Mmm, 경계선을 넘어 날 불러 날 <br></br>
                        모든 것이 바뀌어 모두 무너져 <br></br>
                        잠긴 문 너머 손 뻗어 난 <br></br>
                        고통이 날 반겨, 갈증의 향연 <br></br>
                        사실 두려워 난 <br></br>
                        거울 속의 내가 낯설기만 해 <br></br>
                        이 가면 뒤 초라한 진실 <br></br>
                        But I never escape <br></br>
                        느껴져, 내 머린 daze, daze, daze <br></br>
                        중독에 빠져, replay, play, play <br></br>
                        원함 원하는 대로 갈 때까지 가봐, go <br></br>
                        나를 가둔 carnival, wow, wow <br></br>
                        (다시 내 심장이) daze, daze, daze <br></br>
                        Can′t control my body, dance, dance, dance <br></br>
                        달콤한 이 향기도 붉은빛 송곳니도 <br></br>
                        즐겨봐 이 carnival wow, wow <br></br>
                        나에게 주어진 그 빛 성화의 불길, ah <br></br>
                        주인이 될 때까지, I'ma ride <br></br>
                        느껴져, 내 머린 daze, daze, daze <br></br>
                        중독에 빠져, replay, play, play <br></br>
                        원함 원하는 대로 갈 때까지 가봐, go <br></br>
                        나를 가둔 carnival, wow, wow <br></br>
                        (다시 내 심장이) daze, daze, daze <br></br>
                        Can't control my body, dance, dance, dance <br></br>
                        달콤한 이 향기도 붉은빛 송곳니도 <br></br>
                        즐겨봐 이 carnival, wow, wow <br></br>
                        (Eh) 난 나를 깨워, (eh) 심장을 태워 <br></br>
                        (Eh) 내 꿈을 채워 (whoa-oh, whoa-oh) <br></br>
                        (Eh) 난 나를 깨워, (eh) 심장을 태워 <br></br>
                        (Eh) 내 꿈을 채워 (whoa-oh, whoa-oh) <br></br>
                    </p>
                </div>

                <MemberIcons />

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

export default DrunkDazed