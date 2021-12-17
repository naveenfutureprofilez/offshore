import Button from './Button'
import './Hiredev.css'

function Hiredev() {
    return (
        <>
        <div className="hiredevs py-padding">
            <div className="container">
                <div className="row py-md-4  align-items-center justify-content-between">
                    <div className="col-md-7"><h2>Build A Better Project With Our Developers</h2></div>
                    <div className="col-md-5 ">
                        <Button text="Hire Developer" href="#" addclass="green-btn m-auto d-table" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hiredev

