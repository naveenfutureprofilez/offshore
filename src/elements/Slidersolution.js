import Slider from "../../node_modules/react-slick/dist/react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick";


function Slidersolution() {
    let settings = {
        dots: false,
        arrows :true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return <>
        <Slider {...settings} >
            <div className="slideItem">
                <div className="leftSlide">
                    <div className="sec-title text-white">
                        <h1>Simple<br />
                            Solution for<br />
                            <span class="orange-color">Complex</span><br />
                            Projects</h1>
                        <p>Wish To Have Your Dream Project Completed By World Class Offshore IT Experts? This Is The Place To Be.</p>
                    </div>
                </div>
                <div className="rightSlide">
                    <img src={window.location.origin + '/img/solution.png'} class="img-fluid m-auto d-table" />
                </div>
            </div>
        </Slider>
    </>
}

export default Slidersolution;
