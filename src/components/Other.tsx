import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

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
                        <Link to="/other/place1">
                            <button>ПЕРВАЯ ШТУКА</button>
                        </Link>
                        <Link to="/other/place2">
                            <button>ВТОРАЯ ШТУКА</button>
                        </Link>
                    </div>

                    <Route path="/other/place1" component={Place1} />
                    <Route path="/other/place2" exact component={Place2} />
                </div>
            </Router>
            
        );
    }
}

function Place10({ match }: { match: any }) {
    return (
        <div>
            <h3>{match.path}</h3>
            <Route path={match.path + '/'} component={Place1} />
        </div>
    );
}