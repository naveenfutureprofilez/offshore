import './Servicebox.css'
function Servicebox(props) {
    let counter = ""
    var servclass = props.title.substring(0, 5).replace(" ", "")

    return <>
        <div className={`servBox ${servclass}`}>
            <div className="row">
                <div className="col-md-6">
                    <div className="servImg">
                        <img src={props.img} className='img-fluid' alt="image" />
                        <div className="titlerow">0<span>{counter + 1}</span></div>
                    </div>
                </div> 
                <div className="col-md-6">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    {props.children}
                </div>
            </div>
        </div>
    </>

}
export default Servicebox;
