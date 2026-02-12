import "./Contact.css"
import BackButton from "../BackButton"

function Contact() {
    return(
        <div>
            <BackButton/>
            <div className="contact-title-wrapper">
                <h1 className="contact-title">CONTACT</h1>
            </div>

            <div>
                <p className="contact-header">Have any questions, comments or suggestions? Any missing or incorrect info? Reach out by filling out the form!</p>

                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="First and Last Name" />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="youremail@example.com" />

                    <label htmlFor="message">Message</label>
                    <textarea type="message" id="email" placeholder="Write your message" />

                    <button type="submit">SUBMIT</button>
                </form>
            </div>


        </div>

    )
}

export default Contact