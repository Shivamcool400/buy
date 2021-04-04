import React, {Component} from 'react'

function Product({choice, device, url}) {

    const rate = (rating) => {
        return(
          <div className="rating">
            {Array(rating).fill().map((_, i) => (
          <p><>
          ⭐
        </>
        </p>
        ))}
          </div>
          )
      };
    return (
        
        <div>

{/* First product */}
            
           <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-dark">{choice}</h2>
      </blockquote>
    </figure>
    
    

    <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-dark">{device}</h2>
      </blockquote>
    </figure>
<br></br>
    <div className="row">
      <div className="col-sm-12 col-md-6"><img src={url} className="rounded img-fluid " alt="..." /></div>
      <div className="col-sm-12 col-md-6"><br></br><figure className="text-center ">
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
    <br></br>
    <br></br>

    <div className="container" className="contentbg bg-gradient">
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
        <h2 className="msg-heading-1 text-light">Buyers ratings/reviews</h2>
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
     <th scope="col">Brief</th>
     <th scope="col">recommendation</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Amazon</td>
     <td> {rate(4)}</td>
     <td>All good</td>
      <td><>
  ✔
</>
</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Flipkart</td>
      <td>{rate(3)}</td>
      <td>Battery issues</td>
     <td><>
  ✔
</>
</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ebay</td>
     <td>{rate(2)}</td>
     <td>Heating problems</td>
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
        <h2 className="msg-heading-1 text-light">What makes it a Gaming one!</h2>
      </blockquote>
    </figure>
    <br></br>
    
    <div className="container">
    <div className="card bg-dark bordered">
  <div className="card-body text-white">
  <figure className="text-center">
    <blockquote className="blockquote ">
      <p className="h1 msg-3 text-white"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum laudantium eos, dolorem soluta facilis officiis culpa excepturi atque sunt consectetur recusandae eveniet doloremque corporis labore aliquam inventore in quis? Lore</b></p>
    </blockquote>
  </figure>
  </div>
</div>
    </div>
   <br></br>
   <br></br>

</div>
<br></br>
<br></br>
<div className="container" className="back-2 bg-success bg-gradient">
      <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-light"> Price Comparator</h2>
      </blockquote>
    </figure>

    <div className="container">
      <div className="table-responsive-sm">
      <table className="table table-dark table-bordered border-secondary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Website</th>
      <th scope="col">Price</th>
      <th scope="col">Links</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr className="table-active">
      <th scope="row">1</th>
      <td>Amazon</td>
      <td>36000</td>
      <td><a className="text-white" href="http://www.amazon.com">Buy</a> </td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Flipkart</td>
      <td>35500</td>
      <td><a className="text-white" href="http://www.Flipkart.com">Buy</a> </td>
      </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ebay</td>
      <td>37000 </td>
      <td><td><a className="text-white" href="http:/www.ebay.com">Buy</a> </td></td>
      </tr>
  </tbody>
</table>
      </div>
    </div>
    <br></br>
    <br></br>
</div>
<br></br>
<br></br>
<div className="container" className="back-2 bg-info bg-gradient">
      <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-light"> Tech Stuff </h2>
      </blockquote>
    </figure>
    <div className="container">
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed text-white bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-light">SnapDragon</h2>
      </blockquote>
    </figure>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><figure className="text-center ">
    <blockquote className="blockquote ">
      <p className="h1 msg-3 text-white"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum laudantium eos, dolorem soluta facilis officiis culpa excepturi atque sunt consectetur recusandae eveniet doloremque corporis labore aliquam inventore in quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae iusto quis. Omnis voluptate quidem sint veniam, dolorem aliquam accusantium totam. Reprehenderit dolores facilis beatae tenetur, autem perspiciatis amet temporibus?</b></p>
    </blockquote>
  </figure></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed text-white bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-light">Oxygen os</h2>
      </blockquote>
    </figure>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><figure className="text-center ">
    <blockquote className="blockquote ">
      <p className="h1 msg-3 text-white"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum laudantium eos, dolorem soluta facilis officiis culpa excepturi atque sunt consectetur recusandae eveniet doloremque corporis labore aliquam inventore in quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae iusto quis. Omnis voluptate quidem sint veniam, dolorem aliquam accusantium totam. Reprehenderit dolores facilis beatae tenetur, autem perspiciatis amet temporibus?</b></p>
    </blockquote>
  </figure></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed text-white bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-light">90 hz Fluid AMOLED 6.55" Display</h2>
      </blockquote>
    </figure>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><figure className="text-center ">
    <blockquote className="blockquote ">
      <p className="h1 msg-3 text-white"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum laudantium eos, dolorem soluta facilis officiis culpa excepturi atque sunt consectetur recusandae eveniet doloremque corporis labore aliquam inventore in quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae iusto quis. Omnis voluptate quidem sint veniam, dolorem aliquam accusantium totam. Reprehenderit dolores facilis beatae tenetur, autem perspiciatis amet temporibus?</b></p>
    </blockquote>
  </figure></div>
    </div>
  </div>
</div>

    </div>
    <br></br>
    <br></br>
    <br></br>
    </div>
 
        </div>
    )
}

export default Product;
