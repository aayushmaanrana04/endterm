import React, { useEffect, useState } from 'react'
import './main.css'
import './card.css'

export default function Comment_Button(props){

    const handleClick = () => {
        //   fetch("/like",{
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     method: "POST",
        //     body: JSON.stringify({id: props.id})
        //   })

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