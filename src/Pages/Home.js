import Button from "../elements/Button";
import Hero from "../elements/Hero";
import Slidersolution from "../elements/Slidersolution";

function Home(props) {
    return <>

        <Hero />
        <div class="certified-devs py-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <img src={window.location.origin + '/img/certified-dev.png'} class="img-fluid m-auto d-table" />
                    </div>
                    <div class="col-md-7">
                        <div class="sec-title">
                            <h2>Hire Certified Developers</h2>
                            <h3>Hire Developers For Website & Mobile </h3>
                            <p>At Offshore IT Team Solution, our dedicated team of programmers, coders, & digital marketing gurus work collaboratively to offer every web/mobile development service at highly affordable rates. Here’s just a glimpse of what we do:</p>
                        </div>
                        <div class="dev-services">
                            <div className="serDev webdev">
                                <div class="dev-title">
                                    <div className=" ser-ico">
                                        <img src={window.location.origin + '/img/webdev.svg'} class="img-fluid" />
                                    </div>
                                    Web Development</div>
                                <div className="toogletip">
                                    <svg width="5" height="31" viewBox="0 0 5 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#DFDFDF" />
                                        <circle cx="2.5" cy="15.5" r="2.5" fill="#DFDFDF" />
                                        <circle cx="2.5" cy="28.5" r="2.5" fill="#DFDFDF" />
                                    </svg>
                                </div>
                                <div class="tooltip-menu">
                                    <ul>
                                        <li><a href="#">Wordpress</a></li>
                                        <li><a href="#">Shopify</a></li>
                                        <li><a href="#">Magento</a></li>
                                        <li><a href="#">Joomla</a></li>
                                        <li><a href="#">Opencart</a></li>
                                        <li><a href="#">NodeJS</a></li>
                                        <li><a href="#">Woocommerce</a></li>
                                        <li><a href="#">Python</a></li>
                                        <li><a href="#">Zend</a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="serDev phpdev">
                                <div class="dev-title">
                                    <div className=" ser-ico">
                                        <img src={window.location.origin + '/img/phpdev.svg'} class="img-fluid" />
                                    </div>
                                    PHP Development</div>
                                <div className="toogletip">
                                    <svg width="5" height="31" viewBox="0 0 5 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#DFDFDF" />
                                        <circle cx="2.5" cy="15.5" r="2.5" fill="#DFDFDF" />
                                        <circle cx="2.5" cy="28.5" r="2.5" fill="#DFDFDF" />
                                    </svg>
                                </div>
                                <div class="tooltip-menu">
                                    <ul>
                                        <li><a href="#">CakePHP</a></li>
                                        <li><a href="#">CodeIgniter</a></li>
                                        <li><a href="#">Laravel</a></li>
                                        <li><a href="#">Yii</a></li>
                                        <li><a href="#">Drupal</a></li>
                                        <li><a href="#">Symfony</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="serDev mobiledev">
                                <div class="dev-title">
                                    <div className=" ser-ico">
                                        <img src={window.location.origin + '/img/mobiledev.svg'} class="img-fluid" />
                                    </div>
                                    Mobile Development</div>

                                <div className="toogletip">
                                    <svg width="5" height="31" viewBox="0 0 5 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#DFDFDF" />
                                        <circle cx="2.5" cy="15.5" r="2.5" fill="#DFDFDF" />
                                        <circle cx="2.5" cy="28.5" r="2.5" fill="#DFDFDF" />
                                    </svg>
                                </div>
                                <div class="tooltip-menu">
                                    <ul>
                                        <li><a href="#">Android</a></li>
                                        <li><a href="#">iOS</a></li>
                                        <li><a href="#">Phonegap</a></li>
                                        <li><a href="#">Ionic</a></li>
                                        <li><a href="#">React Native</a></li>

                                    </ul>
                                </div>
                            </div>

                            <div className="serDev netdev">
                                <div class="dev-title">
                                    <div className=" ser-ico">
                                        <img src={window.location.origin + '/img/netdev.svg'} class="img-fluid" />
                                    </div>
                                    .Net Development</div>

                                <div className="toogletip">
                                    <svg width="5" height="31" viewBox="0 0 5 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#DFDFDF" />
                                        <circle cx="2.5" cy="15.5" r="2.5" fill="#DFDFDF" />
                                        <circle cx="2.5" cy="28.5" r="2.5" fill="#DFDFDF" />
                                    </svg>
                                </div>
                                <div class="tooltip-menu">
                                    <ul>
                                        <li><a href="#"> VB.NET</a></li>
                                        <li><a href="#">Xamarin</a></li>
                                        <li><a href="#">Visual Studio</a></li>
                                        <li><a href="#">C#</a></li>
                                        <li><a href="#">Silverlight</a></li>
                                        <li><a href="#">Azure</a></li>
                                        <li><a href="#">MS Dynamics CRM</a></li>
                                        <li><a href="#">AX | NAV, etc</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="serDev marketdev">
                                <div class="dev-title">
                                    <div className=" ser-ico">
                                        <img src={window.location.origin + '/img/marketdev.svg'} class="img-fluid" />
                                    </div>
                                    Online Market</div>
                                <div className="toogletip">
                                    <svg width="5" height="31" viewBox="0 0 5 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#DFDFDF" />
                                        <circle cx="2.5" cy="15.5" r="2.5" fill="#DFDFDF" />
                                        <circle cx="2.5" cy="28.5" r="2.5" fill="#DFDFDF" />
                                    </svg>
                                </div>
                                <div class="tooltip-menu">
                                    <ul>
                                        <li><a href="#">Shopify</a></li>
                                        <li><a href="#">Ruby on Rail</a></li>
                                        <li><a href="#">Magento</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* process */}
        <div className="process blue-bg py-padding ">
            <div className="container">
                <div className="process-sec">
                    <div className="proleft">
                        <div className="sec-title text-white">
                            <h2>STRUCTURE</h2>
                            <h3>Manage support processes easily</h3>
                            <p>Some metrics play an essential role to measure the pulse of a company’s customer service efficiency, while others are more evaluating if a brand has a customer-centric approach. Our customer dashboard will examine this second type of metrics.</p>
                        </div>

                        <div className="dotlist">
                            <ul>
                                <li>COLLABORATION</li>
                                <li>CLIENT ORIENTATION</li>
                                <li>COMPETENCE</li>
                                <li>COMMITMENT</li>
                                <li>CREDIBILITY</li>
                                <li>CLIENT SATISFACTION</li>
                            </ul>
                        </div>
                        <Button text={"Let’s talk"} href={"#"} addclass={"border-btn btn-outline-light mt-4"} />

                    </div>
                    <div className="proright">
                        <img src={window.location.origin + '/img/proccess.png'} class="img-fluid m-auto d-table" />
                    </div>
                </div>
            </div>
        </div>

        {/* agency */}
        <div className="agency py-padding">
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Why OIS Is Right For You?</h2>
                    <h3>Best Offshore IT Staffing Agency</h3>
                    <p>Most established businesses reach the pinnacle of their industry by using the highly cost-effective IT expertise of an offshore company while they focus on their core, and that’s where the assistance of a highly proficient offshore IT staffing agency can prove to be a masterstroke. Here’s what you get from acquiring our globally acclaimed OIS solutions:</p>
                </div>
                <div className="row mb-4 pb-2">
                    <div className="col-md-3">
                        <div className="agency-box profit ">
                            <h2>Remain Profitable</h2>
                            <p>The most profitable ventures today prefer to work “smarter” rather than “harder: and outsourcing their IT projects to a reputable agency.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="agency-box stay ">
                            <h2>Stay Ahead</h2>
                            <p>An experienced offshore IT staff will always be well-versed with the latest and greatest tools & technology. They conduct thorough industry research.</p>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="agency-box focus">
                            <h2>Focus On Your Core</h2>
                            <p>Why deal with highly complex web projects on your own when you can instead use the expertise of a world-class offshore IT staff?</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="agency-box brand">
                            <h2>Elevate Your Brand</h2>
                            <p>Retaining an offshore IT staff is obviously cost-friendly, but that’s not all. Their technical skills & renowned IT acumen lets you acquire custom web.</p>
                        </div>
                    </div>
                </div>
                <Button text={"Know More"} href={"#"} addclass={"border-btn d-table m-auto"} />
            </div>
        </div>

        {/* solutions */}
        <div className="solutions blue-bg py-padding">
            <div className="container">
                <Slidersolution />
            </div>
        </div>

        {/* abshore */}
        <div className="abshore py-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="sec-title">
                            <h2>Offshore IT Staffing</h2>
                            <h3>A leading offshore staffing IT solution provider since 2008</h3>
                            <p>Some metrics play an essential role to measure the pulse of a company’s customer service efficiency, while others are more evaluating if a brand has a customer-centric approach. Our customer dashboard will examine this second type of metrics.</p>
                            <Button text={"Learn More"} href={"#"} addclass={"mt-5"} />
                        </div>
                    </div>
                    <div className="col-md-6 ps-md-5">
                        <div className="event-sec">
                            <ul>
                                <li>
                                    <div className="etitle">
                                        <div className="econ green">1</div>
                                        <h2>Global talent</h2>
                                    </div>
                                    <p>Not getting the skills you need in your part of the globe? We have access to a global team of IT professionals with years of creating real-world solutions.</p>
                                </li>

                                <li>
                                    <div className="etitle">
                                        <div className="econ pink">2</div>
                                        <h2>Flexible extensibility</h2>
                                    </div>
                                    <p>Whether you want a complete team to build your new app or just need to extend your existing team with additional talent, we can scale our dedicated resource model package.</p>
                                </li>

                                <li>
                                    <div className="etitle">
                                        <div className="econ blue">3</div>
                                        <h2>High-value, low-cost</h2>
                                    </div>
                                    <p>When you work with a dedicated resource team, the team works from a remote location, drastically bringing down your overheads in terms of office space and software.</p>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* hire devs */}
        <div className="hiredevs py-padding">
            <div className="container">
                <div className="row py-md-4  align-items-center justify-content-between">
                    <div className="col-md-7"><h2>Build A Better Project With Our Developers</h2></div>
                    <div className="col-md-5 ">
                        <Button text={"Hire Developer"} href={"#"} addclass={"green-btn m-auto d-table"} />
                    </div>
                </div>
            </div>
        </div>


        {/* subscribe */}
        <div className="subscribe py-padding">
            <img src={window.location.origin + '/img/newsletterbg.svg'} class="bg-img rightbottom img-fluid m-auto d-table" />

            <div className="container">
                <div className="sec-title newsinner">
                    <h2>Subscribe</h2>
                    <h3>Our clients describe us as a product team which creates amazing Projects</h3>
                    <p>Submit your email address and subscribe to our newsletter to be on the up and up.</p>
                    <div className="newsletterbar">
                        <div className="inputBar">
                            <input type="text" placeholder="mail.name@gmail.com" class="form-control" />
                            <img src={window.location.origin + '/img/pen.svg'} class="img-fluid m-auto d-table" />
                        </div>
                        <button class="mainBtn border-0">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Home; 
