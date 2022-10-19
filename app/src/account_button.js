import React from 'react'
import { Link } from 'react-router-dom';
import eventBus from './eventBus';
import './main.css'
import './navbar.css'
export default function Account_Button(props){
    const path = {
        pathname: "/"+props.link
    };
    const handleClick = () => {
        eventBus.dispatch("some")
        // window.open("https://www.youtube.com","_self");
        // window.alert(" lo bhai account khul gya");
        // <Link to={path} />
        // console.log(path)
    };
    return(
            <button id='button' onClick={handleClick}>
            {props.icon}
            </button>
            // <Link id='button' to={path}>{props.icon}</Link>
        )
}