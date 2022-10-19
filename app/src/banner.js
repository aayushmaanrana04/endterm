import React, { useState, useEffect, useSyncExternalStore } from 'react';
import Button_Major from './button_major';
import './card.css'
import eventBus from './eventBus';


export default function Banner(props) {

    const [state,setState] = useState(props.visibility);

    function handleClick(){
        
        setState(!state)
        console.log("off")
    }
    if(state){
	return (
        
		<div className='banner'>
            <div>
                <button onClick={handleClick}>
                    <i className="fa-regular fa-circle-xmark fa-xl"></i>
                </button>
            </div>
            <h1>Welcome to Bloq.<br/>A platform built for developers to share pain ;_;<br/><br/>made with love &lt;3</h1>
		</div>
        
	);
    }
};