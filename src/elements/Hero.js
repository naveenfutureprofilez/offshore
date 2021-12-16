import Button from "./Button";
import Client from "./Clients";
import Heroform from "./Heroform";
function Hero() {
    return <>
        <div class="homeBanner">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 sec-title">
                        <h2>Welcome Offshore</h2>
                        <h1>The Leading <span>Offshore IT
                            Staffing</span> Company In India</h1>
                        <p>We provide state-of-the-art outsourcing IT solutions to all scales of businesses at highly competitive prices.</p>
                        <Button text={"Let’s talk"} addclass={"border-btn mt-5"} href={"#"} />
                    </div>
                    <div class="col-md-6">
                        <Heroform />
                    </div>
                </div>
            </div>
            <div class="container clientslogos">
                <ul>
                    <Client />
                </ul>
            </div>

        </div>
    </>
}
export default Hero;
