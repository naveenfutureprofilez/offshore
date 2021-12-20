import { useState } from "react";
import emailjs from 'emailjs-com';
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
function Heroform(props) {
    const Result = () => {
        return <div class="mt-3 alert alert-success" role="alert">
            Your Message has been sent. we will back to you soon.
        </div>
    }

    const [result, showresult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_yck1gij', 'template_3kuvsjo', e.target, 'user_itVge450EwlJRH3TFjFlU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setTimeout(() => {
            showresult(true);
        }, 500);

        setTimeout(() => {
            showresult(false);
        }, 4000);
    };

    return <>
        <div class="heroformOuter">
            <div class="heroform">
                <h3><span>Quick</span> Contact Us</h3>
                <form onSubmit={sendEmail} >
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" placeholder="Your name" />
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" name="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="subject" placeholder="Subject" />
                    </div>
                    <div class="form-group">
                        <textarea  class="form-control" name="message" placeholder="Message"></textarea>
                    </div>
                    <div class="form-group">
                        <input   type="submit" class="mainBtn border-0 px-5" value="Send Us" />
                    </div>
                    <div className="form-group">
                        {result ? <Result /> : null}
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default Heroform;
