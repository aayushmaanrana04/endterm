import React from 'react'
import './main.css'
import './navbar.css'
import Button_Major from './button_major'
import Account_Button from './account_button'
function Navbar(props){
    return(
        <div  className="navbar">
            <div id='logo'>
                <h1>BL0G</h1>
            </div>
            <div id='search'></div>
            
            <div id='account'>
                <Button_Major link={"new"} 
                icon={<i className="fa-solid fa-pen-nib"></i>}
                />
                <Account_Button link={"account"}
                icon={<i className="fa-solid fa-right-to-bracket"></i>}
                
                />
            </div>
        </div>)
}

export default Navbar