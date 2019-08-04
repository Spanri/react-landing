import React from "react";
import "./Position.css";

export default class Position extends React.Component {
    state = {
        text: '',
        position: '',
    };

    positionRandom = () => {
        if(this.state.text === "") {
            this.setState({ text: "Сейчас он хочет стать вот им ---->" });
        }
        let rnd = Math.floor(Math.random() * 10); // от 0 до 5
        switch (rnd) {
            case 0:
                this.setState({ position: "Backend разработчик" })
                break;
            case 1:
                this.setState({ position: "разработчик по фамилии Backend" })
                break;
            case 2:
                this.setState({ position: "бек енд раз раб отчик" })
                break;
            case 3:
                this.setState({ position: "крутой человек Backend" })
                break;
            case 4:
                this.setState({ position: "ничево сейчас не хочет" })
                break;
            case 5:
                this.setState({ position: "Backend developer!!!!!" })
                break;
            case 6:
                this.setState({ position: "Информационные технологии, интернет, телеком" })
                break;
            case 7:
                this.setState({ position: "Ну чтобы платили много" })
                break;
            case 8:
                this.setState({ position: "стажер в отдел разработки" })
                break;
            case 9:
                this.setState({ position: "ИТ-директор и зорплата миллион" })
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <div className="component-position">
                <p>Какую же должность хочет етот человек...</p>
                <p>Кликни на кнопку, чтобы понять, какую должность хочет етот человек в эту секунду! (можно кликать кучу раз)</p>
                <button onClick={this.positionRandom}>КНОПКА</button>
                <p>{this.state.text} {this.state.position}</p>
            </div>
        );
    }
}