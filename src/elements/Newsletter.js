import React from 'react'
import { useState } from "react";
import './Newsletter.css'
import emailjs from 'emailjs-com';


function Newsletter(props) {

    const Result = () => {
        return <div class="mt-3 alert alert-success" role="alert">
            Thank you for subscribe. we will get back to you soon.
        </div>
    }

    const [result, showresult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jnjzp9n', 'template_pprcpg7', e.target, 'user_itVge450EwlJRH3TFjFlU')
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


    return (
        <>
            {/* subscribe */}
            <div className="subscribe py-padding">
                <img src={window.location.origin + '/img/newsletterbg.svg'} class="bg-img rightbottom img-fluid m-auto d-table" />

                <div className="container">
                    <div className="sec-title newsinner">
                        <h2>Subscribe</h2>
                        <h3>Our clients describe us as a product team which creates amazing Projects</h3>
                        <p>Submit your email address and subscribe to our newsletter to be on the up and up.</p>
                        <form onSubmit={sendEmail}>
                            <div className="newsletterbar">
                                <div className="inputBar mt-3 mb-4 mb-lg-5">
                                    <input name="email" type="text" placeholder="mail.name@gmail.com" class="form-control" />
                                    <img src={window.location.origin + '/img/pen.svg'} class="img-fluid m-auto d-table" />
                                </div>
                                <button class="mainBtn border-0">Subscribe</button>
                                <div className="form-group">
                                    {result ? <Result /> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter

