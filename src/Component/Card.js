

import {Link, Redirect, withRouter} from "react-router-dom"
import Loader from "react-loader-spinner";
import { connect } from "react-redux"
import CakeCart from './CakeCart.js'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import { useEffect, useState } from "react";
import ClearCartMiddleWare from  "../reduxStore/ClearCartMiddleWare"

function Card(props) {

 
var total=[]
var sum
var [Cart, setCart]= useState(props.cart)

console.log("this is the props in cart",props)

useEffect (() => {

setCart(props.cart)


},[props.len])

  var style={display: "flex", justifyContent: "center", alignItems: "center"}

    return(
      <div>

   
{props.isloading &&
  <section className="content">
    
       
 
 <div className="row"> 
     <div className="col-sm-6 col-8 col-sm-6"> 
     <div className="card">
         <div className="card-header">
           <div className="row">
           <h5>Cart (<span>{props.len}</span> items)</h5>
             <button type="button" onClick={() =>props.dispatch(ClearCartMiddleWare(props))} className="btn btn-outline-danger btn-sm">Clear Cart</button>
           </div>
              
              <div className="card-body">
      {props.cart.map((each,index)=>{
      total.push(each.price)
       sum = total.reduce((a, b) => {
        return a + b;
      });
  return (
 <>
 <CakeCart data={each} key={index} />
            </>
)}
)}
      </div>
                </div>
                </div> 
                 
                </div> 
                <div className="col-md-4">
        <div className="pt-4">

          <h5 className="mb-3">The total amount of</h5>

          <ul className="list-group list-group-flush">
           
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
              
              </div>
              <span><strong>{sum}</strong></span>
            </li>
          </ul>
{props.len==0 && <Link to='/'><button type="button" className="btn btn-info btn-block">lets Shoping</button></Link>}
         {props.len>0 &&  <Link to='/Checkout/Summary'>  <button type="button" className="btn btn-primary btn-block">Go To checkout</button></Link>
}
        </div>
      </div>


                </div>
       
      </section> 
}
{!props.isloading && <div className="loader center">


    <Loader type="Circles"style={style} height="200" width="200" />
   
    </div>
    

} 


  </div>
   )
  }

let Cart= withRouter(Card) ;

export default connect ((state)=>{

  return{
cart:state.CartReducers.cart,
totalPrice:state.CartReducers.totalPrice,
isloading:state.CartReducers.isloading,
len:state.CartReducers.total

  }


})(Cart) ;