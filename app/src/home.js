import './navbar.css';
import './App.css';
import React from "react";
import Navbar from "./navbar";
import Main from './main';
import Left from './left';
import Right from './right';

export default function Home(){
    return(
        <div className='App'>
        <Navbar />
        <Left />
        <Main />
        <Right />
      </div>
    );
}