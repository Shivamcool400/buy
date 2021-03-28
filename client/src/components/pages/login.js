import React, {Component} from 'react';
import './login.css';

class Login extends Component{
    render() {
        return(
        <div className="container">
  <div className="row">
    <div className="col" />
    <div className="col-sm-12 col-md-8">
      <div className="card">
        <div className="card-body">
          <img src="/logo.jpeg" className="img-fluid" />
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="button" className="btn sign-in-btn btn-lg">Sign in</button>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember Me <div><a href="#"> Need help?</a></div>
            </label>
          </div>
          <a className="new-account" href="#"> Create new account</a>
        </div>
      </div>
    </div>           
    <div className="col" />
  </div>
</div>

        
        
        
        ); } }
        


export default Login ;