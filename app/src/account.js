import './navbar.css';
import './App.css';
import React,{useState,useEffect} from "react";

import './account.css'
import { Link } from 'react-router-dom';
import eventBus from './eventBus';


export default function Account(props){
    
    const [state,setState] = useState(props.visibility);


    function handleClick (){
        //  eventBus.remove("click");
            // console.log(state)
            setState(false)
            // console.log(state)
        }
    
    // eventBus.remove("click")
    eventBus.remove("some")
     useEffect(()=>{
        // console.log(state)
        eventBus.on("some",()=>{
            setState(true)
            
        })
        // eventBus.remove("click")
    },[]);



    if(state){
    return(
        <div id='account-card'>
                <button onClick={handleClick}>
                    <i className="fa-regular fa-circle-xmark fa-xl"></i>
                </button>
            <div id='form-holder'>
                
                <form id='form'>
                    <input type="text" name="name" placeholder='Name'/>
                    <input type="text" name="email" placeholder='email'/>
                        <input type="submit" value="Submit" />
                        <div>
                            
                            <p>don't have an account yet?  
                                <Link to={"/register"}> create account</Link>
                            </p>
                            
                        </div>
                </form>
            </div>
        </div>
    );
    }
}