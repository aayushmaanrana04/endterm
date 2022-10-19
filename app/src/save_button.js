import React, { useEffect, useState } from 'react'
import './main.css'
import './card.css'
// import { response } from 'express';
// import article from './data/article.json'
// const fs = require('node:fs');


// console.log(typeof(article.blogs[0].id));

export default function Save_Label(props){

    const handleClick = () => {
        // fs.writeFileSync('article.txt',"abc");
          // fetch("/like",{
          //   headers: {
          //     'Accept': 'application/json',
          //     'Content-Type': 'application/json'
          //   },
          //   method: "POST",
          //   body: JSON.stringify({id: props.id})
          // })

          //disable like button
          //document.getElementById('button_label').style.display = "none";
          //enable unlike button

    };
    return(
              <button id='button_label' onClick={handleClick} >
                  {props.icon}
                  <h3>{props.display}</h3> 
              </button>
        )
}