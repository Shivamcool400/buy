import React, { Component } from 'react';
import './navbar.css';
import Login from './pages/login';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateprovider';
import Fire from '../firebase';




function Navbar() {
  const [{ user }, dispatch] = useStateValue();

  const handleLogout = () => {
    Fire.auth().signOut();
  };

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BUY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Our Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item nav-item" href="#">Phones</a></li>
            <li><a class="dropdown-item nav-item" href="#">Laptops</a></li>
            <li><a class="dropdown-item nav-item" href="#">Gaming Consoles</a></li>



            <li className="dropdown-item nav-item">     
            <Link to={!user && '/login'}>
            <a className="nav-link pt-3" onClick={handleLogout} href="#">{user ? 'LogOut' : 'Login'}</a>
            </Link>
            </li>
            <li className="dropdown-item nav-item">
            <span className="nav-link pt-3">Hello {!user ? 'Guest' : user.email}</span>
            </li>




          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

</> 

  );

}

export default Navbar;