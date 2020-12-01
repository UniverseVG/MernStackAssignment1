import React, { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";

import "./Style.css";

const App = () => {
    const [CountValue, setCountValue] = useState(10);
    const [CountColor, setCountColor] = useState("one");

    const increaseCount = () => {
        if (CountValue === 10) return;

        const newCount = CountValue + 1;

        setCountValue(newCount);
        if (newCount === 1) {
            setCountColor("one");

        } else if (newCount === 2) {
            setCountColor("two");

        } else if (newCount === 3) {
            setCountColor("three");
        } else if (newCount === 4) {
            setCountColor("four");
        } else {
            setCountColor("five");
        }
    };

    const decreaseCount = () => {
        if (CountValue === 0) return;

        const newCount = CountValue - 1;
        setCountValue(newCount);
        if (newCount === 6) {
            setCountColor("six");
        } else if (newCount === 7) {
            setCountColor("seven");
        } else if (newCount === 8) {
            setCountColor("eight");

        } else if (newCount === 9) {
            setCountColor("nine");
        } else {
            setCountColor("ten");
        }

    };

    const ResetCount = () => {
        if (CountValue === 0) return;
        const newCount = 0;
        setCountValue(newCount);
        setCountColor("basic");
    };



    return ( <
        div className = "app-container" >
        <
        div className = "count-display-container" >
        <
        div className = { `count-display ${CountColor}` } > { CountValue } < /div> < /
        div > <
        div className = "button-container" >
        <
        button onMouseDown = { increaseCount } > + < /button> <
        button onClick = { ResetCount } >
        <
        FaCircleNotch / >
        <
        /button> <
        button onClick = { decreaseCount } > - < /button> < /
        div > <
        /div>
    );

};


export default App;