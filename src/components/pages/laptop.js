import React, {Component} from 'react';
import './laptop.css';

class Laptops extends Component{
    render() {
        return(
            <div>
        <div className="container" className="back">
            <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading">Find Your Device ?</h2>
      </blockquote>
    </figure>
    <br></br>
    <br></br>
    <div className="row">
           <div className="col-sm-12 col-md-3"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Brand</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value={1}>Dell</option>
    <option value={2}>Samsung</option>
    <option value={3}>Apple</option>
    <option value={4}>HP</option>
    <option value={5}>Lenovo</option>
    <option value={6}>Acer</option>
  </select>
</div>
</div>
           <div className="col-sm-12 col-md-3"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Price-range</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value={1}>below-20000</option>
    <option value={2}>below-30000</option>
    <option value={3}>below-40000</option>
    <option value={3}>below-50000</option>
    <option value={3}>below-60000</option>
    <option value={3}>above-60000</option>
  </select>
</div>
</div>
           <div className="col-sm-12 col-md-3"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Genere</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value={1}>Normal</option>
    <option value={2}>Gaming</option>
    <option value={3}>Speedy</option>
    <option value={4}>Coding</option>
  </select>
</div>
</div>
           <div className="col-sm-12 col-md-3"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Ram/Storage</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value={1}>4gb above 256gb storage</option>
    <option value={2}>8gb above 256gb storage</option>
    <option value={3}>12gb above 256gb storage</option>
    <option value={3}>16gb above 256gb storage</option>
  </select>
</div>
</div>
</div>
<div className="">
            <button type="button" className="btn  btn-primary btn-outline-secondary btn-lg find-btn"> Find! </button>
          </div>
          <br></br>
          <br></br>
</div>

<figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-dark"># Brands We Operate</h2>
      </blockquote>
    </figure>
        <div className="row">
          <div className="col-sm-12 col-md-4">
          <img src="/dell.png" className="rounded mx-auto d-block w-100 h-75" alt="..." />

          </div>
          <div className="col-sm-12 col-md-4">
          <img src="/samsung.png" className="rounded mx-auto d-block w-100 h-75" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4">
          <img src="/apple.png" className="rounded mx-auto d-block w-100 h-75" alt="..." />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4">
          <img src="/hp.png" className="rounded mx-auto d-block w-100 h-75" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4">
          <img src="/lenovo.png" className="rounded mx-auto d-block w-100 h-75" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4">
          <img src="/acer.png" className="rounded mx-auto d-block w-100 h-75" alt="..." />
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="container" className="back-2">
            
        <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-dark">BUY EXPERTS</h2>
      </blockquote>
    </figure>
            

        </div>

        </div>
         
       
        
        
        ); } }
        


export default Laptops ;