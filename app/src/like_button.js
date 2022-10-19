import React, { useEffect, useState } from 'react'
import './main.css'
import './card.css'


export default function Like_Button(props){
    // document.getElementsByClassName('unlike').style.display = "none";

    const handleLike = () => {
          fetch("/like",{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({id: props.id})
          })

          //disable like button
        //   document.getElementsByClassName('like').style.display = "none";
        //   document.getElementsByClassName('unlike').style.display = "flex";
          //enable unlike button



    };

    const handleUnlike = () => {
        fetch("/unlike",{
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({id: props.id})
        })

        //disable like button
        // document.getElementsByClassName('unlike').style.display = "none";
        // document.getElementsByClassName('like').style.display = "flex";
        //enable unlike button

  };
    return(
        <div>
              <button id='button_label' className='like' onClick={handleLike} >
                  {props.icon}
                  <h3>{props.display}</h3> 
              </button>
              <button id='button_label' className='unlike' onClick={handleUnlike} >
                  {props.icon}
                  <h3>{props.display}</h3> 
              </button>
        </div>
        )
}