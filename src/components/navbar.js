import React, {Component} from 'react';
import './navbar.css';


class Navbar extends Component{
    render() {
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
          <a className="nav-link pt-3" href="/subscribeus">Subscribe</a>
        </li>
        <li className="nav-item abc">
          <a className="nav-link pt-3" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        
        );
    }
}

export default Navbar;