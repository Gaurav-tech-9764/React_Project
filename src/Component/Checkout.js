import { Route } from "react-router";

import Summary from "./Summary";
import Address from "./Address";
import {Link, Redirect, useParams} from "react-router-dom"


function Checkout() {

    return(
        <>
    <div className="container col-md-12">
       <div className="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
       Checkout Order
 </div> 
 <div className="row" style={{ "margin": "6px" }}>
  <div className="col-sm-2">
   
      <div className="card-body">
      <ul className="list-group list-group-flush">
  <Link to="/Checkout/Summary"><li className="list-group-item">Summary of Order</li></Link>
  <Link to="/Checkout/Address"><li className="list-group-item">Address For Delivery</li></Link>

</ul>
      </div>
    
  </div>
  <div className="col-sm-10">
    <div className="card">
      <div className="card-body">
         
<Route exact path="/Checkout/Summary" component={Summary}/>
<Route exact path="/Checkout/Address" component={Address}/>

      </div>
    </div>
  </div>
</div>
     
      </div>
     
          

        </>


        
    )
    
}


export default Checkout