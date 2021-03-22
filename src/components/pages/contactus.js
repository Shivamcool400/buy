import React, {Component} from 'react';
import './contactus.css'

class Contactus extends Component{
    render() {
        return(
        
        <div className="body">
            <h1 className="head"> Contact Us</h1>
            <div className="box box2">
                <div className="left">
                    <form method="" action="/contactus">
                        <fieldset>
                            <legend>Get in touch</legend>
                            <div class="form-group input">
                                <input type="text" class="form-control" name="name" placeholder="Enter name" />
                            </div>
                            <div class="form-group input">
                                <input type="email" class="form-control" name="email" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group input">
                                <textarea class="form-control" rows="5" id="message" placeholder="Enter your message here..."></textarea>
                            </div>
                            <button className="btn btnmessage">Submit</button>
                        </fieldset>
                    </form>
                </div>

                <div className="right">
                    <div className="emailicon shadow p-3 mb-5 bg-white rounded">
                        <em>For more queries, mail at</em>
                        <i className="fa fa-envelope-o fa-3x"></i>
                        <a href="#" className="email">buyexpert400@gmail.com</a>
                    </div>
                </div>
            </div>
            
        </div>
        
        
        
        ); } }
        


export default Contactus ;