import logo from '../image/logo.svg';
import './Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footerinner d-flex  flex-wrap justify-content-between">
                        <div className="footer-des">
                            <img src={logo} alt="" />
                            <p>A OffShore stays ahead of the curve with digital marketing trends. Our success has us leading the pack amongst.</p>
                            <ul class="d-flex flex-wrap align-items-center mt-4">
                                <li>
                                    <a href='#'>
                                        <img src={window.location.origin + '/img/hangoutIconw.svg'} class="img-fluid" />
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <img src={window.location.origin + '/img/whatsappIconw.svg'} class="img-fluid" />
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <img src={window.location.origin + '/img/skypeIconw.svg'} class="img-fluid" />
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <div className="footer-links">
                            <h3>PRODUCT</h3>
                            <ul>
                                <li><a href="#">Discover features</a></li>
                                <li><a href="#">CMS integration</a></li>
                                <li><a href="#">Customers</a></li>
                                <li><a href="#">Weekly sessions</a></li>
                                <li><a href="#">Free trials</a></li>
                                <li><a href="#">What's next ?</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h3>COMPANY</h3>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">About security</a></li>
                                <li><a href="#">User guide</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Terms of website</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h3>Get In Touch</h3>

                            <div className="footercontact">
                                <ul>
                                    <li>
                                        <a href="tel:+90 98-76-54-+32-10">
                                            <div class="fooCircle">
                                                <img src={window.location.origin + '/img/callicon.svg'} class="img-fluid" />
                                            </div>
                                            <p>+90 98-76-54-+32-10</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:offshore.info@gmail.com">
                                            <div class="fooCircle">
                                                <img src={window.location.origin + '/img/mailicon.svg'} class="img-fluid" />
                                            </div>
                                            <p>offshore.info@gmail.com</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div class="copyright">
                <div className="container">
                    <p>© 2021, All Rights Reserved</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
