import React from 'react'
import { Link } from 'react-router-dom';
import './main.css'
import './navbar.css'
export default function Button_Major(props){
    const path = {
        pathname: "/"+props.link
    };
    // const handleClick = () => {

    
    //     // window.open("https://www.youtube.com","_self");
    //     // window.alert(" lo bhai account khul gya");
    //     <Link to={path} />
    //     console.log(path)
    // };
    return(
            // <button id='button' onClick={handleClick}><h2>{props.link}</h2></button>
            <Link id='button' to={path}>{props.icon}</Link>
        )
}