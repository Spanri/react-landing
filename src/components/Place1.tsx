import React from "react";

export default class Place1 extends React.Component {
    render() {
        return (
            <div className="component-place1">
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
                            <td>Март 2019 — Июнь 2019</td>
                            <td>4 месяца</td>
                            <td>amoCRM</td>
                            <td>
                                Москва<br></br>
                                Программист-разработчик<br></br>
                                Проектирование и реализация на Go бэкенда для новых фич, написание документации, ревью кода.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mobile">
                    <p>Откудава по кудава: Март 2019 — Июнь 2019</p>
                    <p>Это скока: 4 месяца</p>
                    <p>Чево: amoCRM</p>
                    <p>
                        Бла бла бла:<br></br>
                        Москва<br></br>
                        Программист-разработчик<br></br>
                        Проектирование и реализация на Go бэкенда для новых фич, написание документации, ревью кода.
                    </p>
                </div>
            </div>
        );
    }
}