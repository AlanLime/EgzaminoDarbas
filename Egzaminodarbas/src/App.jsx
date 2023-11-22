import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import {auth} from "./firebase-config"
import Search from './pages/Search';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const SignUserOut = () =>{
    signOut(auth).then(() =>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }
  console.log(auth?.currentUser?.photoURL)
  return (
    <Router>
    <nav>
      <h1>Skelbimai.lt</h1>
      <Search />
      {/* <textarea className="textbar1" placeholder='Search anything you like...'></textarea> */}
      <li><Link to="/">Skelbimai</Link></li>
      <li>{isAuth && <Link to="/createsale">Kurti Skelbima</Link>}</li>
      <li> {!isAuth ? <Link to="/login" className='E'>Prisijungti</Link> : <button className='logout' onClick={SignUserOut}>Atsijungti</button>}</li>
      {isAuth &&<img className="userprofile" src={auth?.currentUser?.photoURL} alt='UserImage'/>}
    </nav>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>}/>
      <Route path="/createsale" element={<CreatePost/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
    </Routes>
    </Router>
  );
}

export default App;