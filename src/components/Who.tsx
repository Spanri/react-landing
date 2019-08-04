import React from "react";
import "./Who.css";

export default class Who extends React.Component {
    render() {
        return (
            <div className="component-who">
                <p className="one">Я не знаю, кто ето</p>
                <p>Ха ха пошутила, листай дальше</p>
                <img src="./haha.jpg" alt="ха-ха! ребенок смеется"></img>
                <p>Смотри вправо ----></p>
                <p className="right">Ето мужчина</p>
                <p className="right">Он уже родился, вот в ету дату => 19 мая 1998 год</p>
                <p className="right">Какая-то непонятная информация: Москва, м. Кантемировская, готов к переезду, готов к командировкам</p>
            </div>
        );
    }
}