import Hiredev from "../elements/Hiredev";
import Newsletter from "../elements/Newsletter";
import Pagecaption from "../elements/Pagecaption";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './Ourclient.css'
import clientsData from './Clientsdata';

function Ourclient() {

    const Ourclient = () => {
        const clients = clientsData.map(client => {
            return (
                <div className="col-md-4">
                    <div className="clientbox">
                        <div className="clientslogo">
                            <img src={client.clientlogo} alt="" />
                        </div>
                        <p>{client.description}</p>
                        <NavLink className="readmoreclint mainBtn border-btn mt-5" to="/services">Read More</NavLink>
                    </div>
                </div>
            );
        });


        return <>
            <Pagecaption subtitle="Our Client" pagetitle="All Hi5 clients are 100% satisfied" />


            <div className="py-padding">
                <div className="container">
                    <div className="row">
                        {clients}
                    </div>
                </div>
            </div>

            <Hiredev />
            <Newsletter />
        </>
    }
    export default Ourclient;
