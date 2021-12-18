import React from 'react'
import './Newsletter.css'

function Newsletter(props) {
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
                    <div className="newsletterbar">
                        <div className="inputBar mb-4 mb-lg-5">
                            <input type="text" placeholder="mail.name@gmail.com" class="form-control" />
                            <img src={window.location.origin + '/img/pen.svg'} class="img-fluid m-auto d-table" />
                        </div>
                        <button class="mainBtn border-0">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Newsletter

