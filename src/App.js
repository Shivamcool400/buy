
import React, { Component } from 'react';
import Navbar from './Component/Layout/Navbar';
import Users from './Component/Users/Users';
import './App.css';



 class App extends Component {
  render(){
    return (
      <div className="App">
       <Navbar /> 
      <div className='container'>

      <Users />
      </div>

      
     </div>
    );
  } 
}

export default App;
