// import logo from './logo.svg';
import './App.css';
import './navbar.css';
import React from "react";
import Navbar from "./navbar";
import Home from "./home.js"
import Main from './main';
import Left from './left';
import Right from './right';
import New from './new';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from './account';


function App() {

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);


  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/account' element={<Account/>}></Route>
        <Route exact path='/new' element={<New/>}></Route>
        
        <Route exact path='*' element={<h1>404</h1>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
