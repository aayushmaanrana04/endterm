import React, { useEffect, useState } from 'react'
import './main.css'
import './card.css'
import article from './data/article.json'

export default function Hash_Label(props){
    // console.log(props.x);
    const handleClick = () => {
        console.log(props.hash);
    };
    return(
            <button id='hash_label' onClick={handleClick} >{props.hash}
            </button>
        )
}