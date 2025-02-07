import "./contact.css";
function Contact(){
    return(
        <div className="div-main">
            <div className="contact-div">
                <h1> Contact us</h1>
                <h3>Need more information? Share your contact details and we will reach out to you soon.</h3>
                <div className="inp1-div">
                    <input type="text" className="fst"  placeholder="Enter First Name: "></input>
                    <input type="text" className="lst"  placeholder="Enter Last Name: "></input>
                </div>
                <div className="inp2-div">
                    <input type="text" className="mob"  placeholder="Enter Mobile Number: "></input>
                    <input type="text" className="ml"  placeholder="Enter Email Address: "></input>
                </div>
                <div className="inp3-div">
                    <textarea className="msg"  placeholder="Message:" ></textarea>
                </div>
                <button type="submit" className="sbmit">Submit</button>
            </div>
        </div>
    )
}
export default Contact;