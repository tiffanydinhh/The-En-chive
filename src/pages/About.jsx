import "./About.css"
import BackButton from "../BackButton"

function About() {
    return(
        <div>
            <BackButton/>
            <div className="about-title-wrapper">
                <h1 className="about-title">ABOUT</h1>
            </div>

            <h2 className="about-header">WHY THIS WEBSITE WAS CREATED:</h2>

            <p className="about-text">My favorite artist is Enhypen and I talk about them non-stop. I have a friends who don't know anything about Enhypen so I wanted to make a 
                website to showcase their discography and give more information about their songs for those who want to learn more! I also wanted to practice
                designing, front-end development, and using React.</p>

            <h2 className="about-header">ACKNOWLEDGEMENTS/COPYRIGHT:</h2>
            <p className="about-text">All images belong to their rightful owneres. This website was only created for practice front-end development.</p>

        </div>
    )
}

export default About