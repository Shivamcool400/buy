import React, {useState, useEffect} from 'react';
import './phone.css';
import Fire from '../../firebase';


function Phones () {
  const db = Fire.firestore();
  const [brand, setBrand] = useState([]);
  useEffect(() => {
   db.collection('brand').onSnapshot(snapshot => (
     setBrand(snapshot.docs.map(doc => doc.data()))
   ))
   db.collection('oneplus').orderBy("price").onSnapshot(snapshot => (
    setOneplus(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('samsung').orderBy("price").onSnapshot(snapshot => (
    setSamsung(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('apple').orderBy("price").onSnapshot(snapshot => (
    setApple(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('realme').orderBy("price").onSnapshot(snapshot => (
    setRealme(snapshot.docs.map(doc => doc.data()))
  ))
  }, []);
  const [selected, setSelected] = useState('');

  const [oneplus,setOneplus] = useState([]);
  const [samsung,setSamsung] = useState([]);
  const [apple,setApple] = useState([]);
  var [realme,setRealme] = useState([]);
  

const rate = (rating) => {Array(rating).fill().map((_, i) => (
    <p><>
    ⭐
  </>
  </p>
  ))};

   
  
   
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
          /// find one!///
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
            <option value={brand.name} key={brand.name}>{brand.name}</option>
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

{/* middle part after clicking find */}

<figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-dark">Our First Choice  #1</h2>
      </blockquote>
    </figure>
    
    

    <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-dark">OnePlus-Nord</h2>
      </blockquote>
    </figure>
<br></br>
    <div className="row">
      <div className="col-sm-12 col-md-6"><img src="https://static.digit.in/default/da502c9b7c4eb1168eb3b8db6861c1e33501f6d3.jpeg?tr=n-product_detail_leader_thumb" className="rounded img-fluid " alt="..." /></div>
      <div className="col-sm-12 col-md-6"><figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="title text-dark">Specifications</h2>
      </blockquote>
    </figure>
    <div className="table-responsive-sm">
    <table className="table table-bordered border-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">specs</th>
      <th scope="col">quality</th>
      <th scope="col">recommendation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Camera</td>
      <td>2.5 Mp</td>
      <td><>
  ✖
</>
</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Storage</td>
      <td>128gb</td>
      <td><>
  ✔
</>
</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ram</td>
      <td>6gb</td>
      <td><>
  ✔
</></td>
    </tr>
  </tbody>
</table>
    </div>
   
    </div>
    </div>

    <div className="container" className="back-2 bg-secondary bg-gradient">
      <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-light">Why we recommend this?</h2>
      </blockquote>
    </figure>

    <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-light">Experts views over this</h2>
      </blockquote>
    </figure>
    <br></br>
    <div className="container">
      <div className="table-responsive-sm">
      <table className="table table-dark table-bordered border-secondary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Youtuber</th>
      <th scope="col">Views</th>
      <th scope="col">Likes</th>
      <th scope="col">brief</th>
      <th scope="col">recommendation</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>30.1 lakhs</td>
      <td>2k likes</td>
      <td>restarts takes time</td>
      <td><>
  ✔
</>
</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>20.1 lakhs</td>
      <td>1.5k likes</td>
      <td>screen not hard</td>
      <td><>
  ✔
</>
</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>facoy</td>
      <td>50k </td>
      <td>0.5k likes</td>
      <td>all good</td>
      <td><>
  ✖
</>
</td>

      
    </tr>
  </tbody>
</table>
      </div>
    </div>
<br></br>
<br></br>

<figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-light">Famous blogs on this</h2>
      </blockquote>
    </figure>
    <br></br>

<div className="container">
      <div className="table-responsive-sm">
      <table className="table table-dark  table-bordered border-secondary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">blogger</th>
     <th scope="col">Likes</th>
     <th scope="col">recommendation</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
     <td>2k likes</td>
      <td><>
  ✔
</>
</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>1.5k likes</td>
     <td><>
  ✔
</>
</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>facoy</td>
     <td>0.5k likes</td>
      <td><>
  ✖
</>
</td>

      
    </tr>
  </tbody>
</table>
      </div>
    </div>
    <br></br>
    <br></br>

    <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-light">Websites ratings</h2>
      </blockquote>
    </figure>
    <br></br>

    <div className="container">
      <div className="table-responsive-sm">
      <table className="table table-dark  table-bordered border-secondary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Sellers</th>
     <th scope="col">Ratings</th>
     <th scope="col">recommendation</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
     <td></td>
      <td><>
  ✔
</>
</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>1.5k likes</td>
     <td><>
  ✔
</>
</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>facoy</td>
     <td>0.5k likes</td>
      <td><>
  ✖
</>
</td>

      
    </tr>
  </tbody>
</table>
      </div>
    </div>
    <br></br>
    <br></br>




</div>
























































































{/* ending part  */}
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