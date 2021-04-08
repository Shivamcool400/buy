import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        {
          <footer className="footer-wrapper">
            <div className="row footer-row-wrapper">
              <div className="row footer-favicons">
                <div className="col-sm-12 col-md-12 favicons-row">
                  <div className="favicons-wrapper">
                    <i className="fab fa-facebook-square fa-3x" />
                    <i className="fab fa-instagram fa-3x" />
                    <i className="fas fa-envelope-square fa-3x" />
                  </div>
                  
                </div>
              </div>
              <hr className="footer-hr" />
              <div className="row footer-row-main " />        
              <div className="col-md-5 col-sm-12 footer-logo-wrapper">  {/* Col 1 For FooterLogo*/}
                <img className="footer-logo" src="logo.jpg" />
              </div>
              <div className="col-md-7 col-sm-12 footer-contact-form">  {/* Col 2 For ContactForm*/}
                <div className="footer-contact-container">
                  
                  <form action>
                  <h1 className="footer-contact-header">Drop Us A Line</h1>
                    <label className="form-group" htmlFor="name">Name</label>
                    <div className="form-group">
                      <input className="form-control" type="text" id="name" />
                    </div>
                    <label className="form-group" htmlFor="email">E-Mail</label>
                    <div className="form-group">
                      <input className="form-control" type="text" id="email" />
                    </div>
                    <label className="form-group" htmlFor="message">Feedback</label>
                    <div className="form-group">
                      <textarea className="form-control" id="message" rows={3} defaultValue={""} />
                    </div>
                    <div className="btn-wrapper-footer"><button type="button" className="btn btn-primary">Submit</button></div>
                  </form>
                </div>
              </div>
              <h5 className="copyright-footer">
                © 2021 BuyExpert | All Rights Reserved.
            </h5>
            </div>
          </footer>
        }


      </>
    );
  }
}
export default Footer;