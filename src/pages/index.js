import React from "react";
import { useState } from "react";
import "../pages/css/counter_stl.css";


const Home = () => {
    const [count, setCount] = useState(0)

    function clickMe(amount, sign) {
        switch (sign) {
            case '+':
                setCount(count + amount);
                break;
            case '-':
                setCount(count - amount);
                break;
        }
    }

    function Button(props) {
        return (
            <button className='btn_blue' onClick={() => clickMe(props.amount, props.sign)}>
                {props.sign}{props.amount}
            </button>
        );
    }

    return (
        <div className="box">
            <h1>Your score: {count}</h1>
            <Button
                amount={1}
                sign='+'
            ></Button>
            <Button
                amount={10}
                sign='+'
            ></Button>
             <Button
                amount={10}
                sign='-'
            ></Button>
        </div>
    )
};

export default Home;