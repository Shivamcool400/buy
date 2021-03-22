import React, {Component} from 'react';
import './footer.css';

class Footer extends Component{
    render() {
        return (
        
        <>
  <br />
  <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-lg-4 " >
          <i className="fa fa-facebook-official fa-4x" aria-hidden="true" />
        </div>
        <div className="col-sm-12 col-lg-4" >
          <i className="fa fa-instagram fa-4x" aria-hidden="true" />
        </div>
        <div className="col-sm-12 col-lg-4" >
          <i className="fa fa-envelope-o fa-4x " aria-hidden="true" />
        </div>
        <h5> © BUY EXPERTS. All rights reserved.</h5>
      </div>
    </div>
  </footer>
</>

        
        
        );
    }
}
export default Footer;