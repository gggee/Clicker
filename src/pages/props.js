import React, { useState, useEffect } from "react";

function Header(props) {
    // let text = props.text;
    // text += '!!!'
    let header;
    switch(props.type){
        case "header":
            header= (props.lc =='en') ? "Hey there!" : "Salem!";
    }

    return (
        <h1>{header}</h1>
    );
}

const Props = () => {
    return <Header
        lc={"kk"}
        type = {"header"}
    />
}

export default Props;