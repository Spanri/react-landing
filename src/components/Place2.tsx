import React from "react";

export default class Place2 extends React.Component {
    state = {
        date: ((Date.now() / 1000 - 1559347200) / 60 / 60 / 24).toFixed(0),
        // /1000/60/60/24,
    };

    render() {
        return (
            <div className="component-place2">
                <table>
                    <thead>
                        <tr>
                            <th>Откудава по кудава</th>
                            <th>Это скока</th>
                            <th>Чево</th>
                            <th>Бла бла бла</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Июнь 2019 — по настоящее время</td>
                            <td>{this.state.date} (ето дни)</td>
                            <td>Messaggio</td>
                            <td>
                                Москва<br></br>
                                Программист-разработчик<br></br>
                                Проектирование и разработка микросервисов.
                        </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mobile">
                    <p>Откудава по кудава: Июнь 2019 — по настоящее время</p>
                    <p>Это скока: {this.state.date} (ето дни)</p>
                    <p>Чево: Messaggio</p>
                    <p>
                        Бла бла бла:<br></br>
                        Москва<br></br>
                        Программист-разработчик<br></br>
                        Проектирование и разработка микросервисов.
                    </p>
                </div>
            </div>
        );
    }
}