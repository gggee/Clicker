import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../pages/css/click_stl.css";

const Menu_footer = ({ onClose, onAdd, onReset, onOne }) => {
    return (
        <div className="popup-menu">
            <button className='btn_add' onClick={onOne}>+</button>
            <div className="btn_div">
                <button onClick={onReset}>Reset to zero</button>
                <button onClick={onAdd}>+ 20</button>
            </div>
            <button onClick={onClose} className="btn_close">Close</button>
        </div>
    );
};

const Store = ({ onClose }) => {
    return (
        <div className="popup-shop">
            <h1 className="shop">SHOP</h1>
            <div className="shop_items">
            </div>
            <button onClick={onClose} className="btn_close_shop">Close</button>
        </div>
    );
}

const Click = () => {
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(1)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);

    useEffect(() => {
        const count = localStorage.getItem('record')
        if (count) {
            setCount(count)
        }
    })

    const userData = {
        score: count,
        click: amount
    };

    localStorage.setItem('data', JSON.stringify(userData))
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    function toggleShop() {
        setIsShopOpen(!isShopOpen)
    }
    function Add_btn() {
        clickMe(20, '+')
    }
    function Add_One() {
        clickMe(1, '+')
    }
    
    function clickMe(amount, sign) {
        switch (sign) {
            case '+':
                setCount(count + amount);
                break;
            case '-':
                setCount(count - amount);
                break;
        }
        let record = Number(count) + Number(amount)
        localStorage.setItem('record', record)
    }

    function Button(props) {
        return (
            <button className='btn' onClick={() => clickMe(props.amount, props.sign)}>
                {props.text}
            </button>
        );
    }

    return (
        <div className="container">
            <p className="cnt">Count: {count}</p>
            <Button
                amount={5}
                sign='+'
                text='$'
            />

            <div className="block_btn">
                <button onClick={toggleMenu} className="btn_open">Addition</button>
                <button onClick={toggleShop} className="btn_open">Store</button>
            </div>
            {isMenuOpen && <Menu_footer onClose={toggleMenu} onAdd={Add_btn} onOne={Add_One} />}
            {isShopOpen && <Store onClose={toggleShop} />}
        </div>
    )
}

export default Click;