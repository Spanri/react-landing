import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Place1 from "./Place1";
import Place2 from "./Place2";

import "./Other.css";

export default class Other extends React.Component {
    render() {
        return (
            <Router>
                <div className="component-other">
                    <p>Это секрет!!!!!!!!!!!!!! Но вот про опыт работы</p>
                    <div className="links">
                        <button>
                            <Link to="/place1">ПЕРВАЯ ШТУКА</Link>
                        </button>
                        <button>
                            <Link to="/place2">ВТОРАЯ ШТУКА</Link>
                        </button>
                    </div>

                    <Route path="/place1" component={Place1} />
                    <Route path="/place2" exact component={Place2} />
                </div>
            </Router>
            
        );
    }
}