import React, {useState, Component} from 'react';
import './phone.css';

function Phones () {
  const [brand, setBrand] = useState([
    {
      name: "oneplus",
    },
    {
      name: "samsung",
    },
    {
      name: "Apple"
    },
    {
      name: "realme"
    },
  ]);
  const [selected, setSelected] = useState('');

  var oneplus = [
    {
      price: "above 20000",
      genere: "gaming",
      ramstorage: "6gb above 64gb storage"
    },
    {
      price: "above 30000",
      genere: "normal",
      ramstorage: "6gb above 128gb storage"
    },
    {
      price: "above 40000",
      genere: "speedy",
      ramstorage: "8gb above128gb storage"
    }
  ];
  var samsung = [
    {
      price: "above 10000",
      genere: "gaming",
      ramstorage: "6gb above 64gb storage/memorycard"
    },
    {
      price: "above 20000",
      genere: "normal",
      ramstorage: "6gb above 128gb storage"
    },
    {
      price: "above 30000",
      genere: "speedy",
      ramstorage: "8gb above 128gb storage"
    },
    {
      price: "above 40000",
      genere: "both",
      ramstorage: "8gb above 128gb storage"
    }

  ];
  var apple = [
    {
      price: "above 30000",
      genere: "gaming",
      ramstorage: "above 64gb storage"
    },
    {
      price: "above 40000",
      genere: "normal",
      ramstorage: " above 128gb storage"
    },
    {
      price: "above 50000",
      genere: "speedy",
      ramstorage: " above 256gb storage"
    }
  ];
  var realme = [
    {
    price: "above 10000",
    genere: "gaming",
    ramstorage: "6gb above 64gb storage/memorycard"
  },
  {
    price: "above 20000",
    genere: "normal",
    ramstorage: "6gb above 128gb storage"
  },
  {
    price: "above 30000",
    genere: "speedy",
    ramstorage: "8gb above 128gb storage"
  }
];
  
   
  var currentarray=[];
  if(selected === "oneplus"){
    currentarray= oneplus;
   } else if (selected === "samsung"){
     currentarray= samsung;
   } else if (selected === "Apple") {
     currentarray = apple;
   } else if (selected === "realme"){
     currentarray = realme;
   }
   
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
  <select onChange={(e) => setSelected(e.target.value)} className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
          {brand.map((brand) => (
            <option value={brand.name}>{brand.name}</option>
          ))}
   </select>
</div>
</div>


           <div className="col-sm-12 col-md-3"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Price-range</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    {currentarray.map((price) => (
            <option value={price.price}>{price.price}</option>
          ))}
  </select>
</div>
</div>
           <div className="col-sm-12 col-md-3"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Genere</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    {currentarray.map((genere) => (
            <option value={genere.genere}>{genere.genere}</option>
          ))}
  </select>
</div>
</div>
           <div className="col-sm-12 col-md-3"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Ram/Storage</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    {currentarray.map((ramstorage) => (
            <option value={ramstorage.ramstorage}>{ramstorage.ramstorage}</option>
          ))}
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
          <div className="col-sm-12 col-md-4 image">
          <img src="/oppo.jpg" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />

          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/samsung.png" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/oneplus.jpg" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 image">
          <img src="/mi.jpg" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/apple.png" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/micromax.png" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="container" className="back-2 bg-dark">
            
        <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-light">BUY EXPERTS</h2>
      </blockquote>
    </figure>
    <figure className="text-center ">
    <blockquote className="blockquote ">
      <p className="h1 msg-3 text-white">Always Working on Providing The best Support To Our Users And The Subscribers. We Are Commited To You And Will Not Leave Any Stone Unturned Until You Find A Phone Meeting Your Desired Needs.</p>
    </blockquote>
  </figure>
<br></br>
<br></br>
        </div>
       
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       

       <div className="container" className="shift">
    <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="heading-2">Looking for something else ?</h2>
      </blockquote>
    </figure>
  </div>
<br></br>
<br></br>
  <div className="row">

<div className="col-sm-12 col-md-4 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
          <h5 className="card-title heading"> <b> Gaming Consoles</b> </h5> 
          <p className="card-text text-center"> "Winner winner chicken dinner!! True gamers always require  relevant choices."</p>
          <div className="wrapper-btn">
          <a className="phn" href="/gamingconsoles"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
          </div></div> 
</div>
<div className="col-sm-12 col-md-4 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
          <h5 className="card-title heading"> <b>Laptops</b> </h5> 
          <p className="card-text text-center"> "Find a genuine laptop for youself"</p> 
          <div className="wrapper-btn">
          <a className="phn" href="/laptops"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
          </div> </div>
</div>
<div className="col-sm-12 col-md-4 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
          <h5 className="card-title heading"> <b>Accessories</b> </h5> 
          <p className="card-text text-center">"Finding the thing which is right for u buddy!</p>
          <div className="wrapper-btn">
          <a className="phn" href="/accessories"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
          </div></div>
</div>


</div>

<br></br>
<br></br>

        </div>
        
         
       
        
        
        );  }
        


export default Phones ;