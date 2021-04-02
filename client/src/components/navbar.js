import React, {Component} from 'react';
import './navbar.css';
import Login from './pages/login'; 
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateprovider';
import Fire from '../firebase';

 


function Navbar() {
  const [{user}, dispatch] = useStateValue();

  const handleLogout = () => {
  Fire.auth().signOut();
};
    
        return (

           <nav className="navbar navbar-expand-lg scrolling-navbar">
  <div className="container-fluid">
    <a className="navbar-brand abc pt-2" href="/home"><b>BUY</b></a>
    <button className="navbar-toggler abc" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""/><>
  ☰
</>

    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav  ">
        <li className="nav-item abc">
          <a className="nav-link active pt-3" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item abc">
          <a className="nav-link pt-3" href="/aboutus">About us!</a>
        </li>
        <li className="nav-item abc">
          <a className="nav-link pt-3" href="/contactus">Contact us!</a>
        </li>
        <li className="nav-item abc">
          
          <Link to={!user && '/login'}>
          <a className="nav-link pt-3" onClick={handleLogout} href="#">{user ? 'LogOut' : 'Login'}</a>
          </Link>
        </li>
        <li className="nav-item abc">
        <span className="nav-link pt-3">Hello {!user ? 'Guest' : user.email}</span>
        </li>
        <li className="nav-item abc">
          <a className="nav-link pt-3 mx-5" href="/phones">Phones!</a>
        </li>
        <li className="nav-item abc">
          <a className="nav-link pt-3 mx-5" href="/laptops">Laptops!</a>
        </li>
        <li className="nav-item abc">
          <a className="nav-link pt-3 mx-5" href="/gamingconsoles">Gaming consoles!</a>
        </li>
        <li className="nav-item abc">
          <a className="nav-link pt-3 mx-5" href="/accessories">Accessories!</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        
        
        );
    
}

export default Navbar;