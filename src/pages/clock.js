import React, { useState, useEffect } from "react";

const Clock = () => {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        setInterval(() => {
            setCount(count => count + 1);
        },1000);
    }, []);

    return <h1>{count}</h1>
    // const element = <Welcome />
    // return setInterval(Welcome, 1000)

    //return element;
    // return (
    //     <h1>Clock</h1>
    // );
}

export default Clock;