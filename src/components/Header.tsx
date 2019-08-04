import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import Who from "./Who";
import Position from "./Position";
import Employment from "./Employment";
import Schedule from "./Schedule";
import Other from "./Other";

import "./Header.css";

export default class Header extends React.Component {
    render() {
        return (
            <Router>
                <div className="component-header">
                    <h2 className="title">Шеламов Дмитрий Николаевич</h2>
                    <nav>
                        <ul>
                            <li>
                                <img src="star.png" alt="звездочка"></img>
                                <Link to="/">САМАЯ ДОМАШНЯЯ СТРАНИЦА</Link>
                            </li>
                            <li>
                                <img src="star.png" alt="звездочка"></img>
                                <Link to="/who">КТО ЕТОТ ЧЕЛОВЕК</Link>
                            </li>
                            <li>
                                <img src="star.png" alt="звездочка"></img>
                                <Link to="/position">КАКУЮ ХОЧЕТ ДОЛЖНОСТЬ</Link>
                            </li>
                            <li>
                                <img src="star.png" alt="звездочка"></img>
                                <Link to="/employment">КАКУЮ ХОЧЕТ ЗАНЯТОСТЬ</Link>
                            </li>
                            <li>
                                <img src="star.png" alt="звездочка"></img>
                                <Link to="/schedule">КАКОЙ ХОЧЕТ ГРАФИК РАБОТЫ</Link>
                            </li>
                            <li>
                                <img src="star.png" alt="звездочка"></img>
                                <Link to="/other">ЧЕВО-ТО ЕЩЕ</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path='/who' component={Who} />
                        <Route path="/position" exact component={Position} />
                        <Route path="/employment" exact component={Employment} />
                        <Route path="/schedule" exact component={Schedule} />
                        <Route path="/other" component={Other} />
                    </div>
                </div>
            </Router>
        );
    }
}
