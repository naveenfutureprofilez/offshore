import Feature from "../elements/Feature";
import Pagecaption from "../elements/Pagecaption";
function Whyus() {
    return <>
        <Pagecaption subtitle={"WHY US"} pagetitle={"Best Offshore IT Staffing Agency"} />

        {/* our features */}
        <div className="ourfeatures py-padding">
            <div className="container">
                <p className="runningtext">Most established businesses reach the pinnacle of their industry by using the highly cost-effective IT expertise of an offshore company while they focus on their core, and that’s where the assistance of a highly proficient offshore IT staffing agency can prove to be a masterstroke. Here’s what you get from acquiring our globally acclaimed OIS solutions:</p>
            
            {/* features box */}
            <Feature
            featureimg={"../image/feature-1.png"} 
            featureTitle={"Remain Profitable"} 
            featuredes={"The most profitable ventures today prefer to work “smarter” rather than “harder: and outsourcing their IT projects to a reputable agency is a major part of that innovative approach. You can also take the savvy route and adopt offshore staffing which, in addition to being a highly cost-effective practice, allows you to elevate your level of productivity."} 
            />
            </div>
        </div>

    </>
}
export default Whyus;
