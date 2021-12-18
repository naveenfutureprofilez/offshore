import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import React from 'react';
import './App.css'

// pages
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Header from './elements/Header';
import Footer from './elements/Footer';
import Whyus from './Pages/Whyus';

// detail page
import Ourclient from './Pages/Ourclient';
import Clientdetail from './Pages/Clientdetail';

function App() {
    return (
        <div className="App"   >
            <Router>
                <Header />
                {/* switch cases */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/why-us">
                        <Whyus />
                    </Route>
                    <Route path="/services">
                        <Service />
                    </Route>
                    <Route exact path="/our-clients">
                        <Ourclient />
                    </Route>
                    <Route  path="/our-clients/:clientid">
                        <Clientdetail />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>

                <Footer />
            </Router>
        </div>
    );
}
export default App;
