import React from "react";
import "./Schedule.css";
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Спать',
        'Есть',
        'Работать'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            'rgb(88, 199, 175)',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            'rgb(88, 199, 175)',
            '#FFCE56'
        ]
    }]
};

export default class Schedule extends React.Component {
    render() {
        return (
            <div className="component-schedule">
                <p>Запомните, твари</p>
                <p>Человеку нужен такой график.......</p>
                <div className="bar">
                    <Doughnut data={data} />
                </div>
            </div>
        );
    }
}