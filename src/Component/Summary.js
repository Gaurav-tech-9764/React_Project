

import {Link, Redirect, withRouter} from "react-router-dom"
import Loader from "react-loader-spinner";
import { connect } from "react-redux"
import CheckoutList from './CheckoutList.js'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import { useEffect, useState } from "react";
import ClearCartMiddleWare from  "../reduxStore/ClearCartMiddleWare"

function Summary(props) {

            
            var total=[]
            var sum
            var [Cart, setCart]= useState(props.cart)


            useEffect (() => {

            setCart(props.cart)


            },[props.cart.length])

  var style={display: "flex", justifyContent: "center", alignItems: "center"}

    return(
      <div>

   
{props.isloading &&
  <section className="content">
    
       
 
 <div className="row"> 
     <div className="col-sm-10 col-md-6"> 
     <div className="card">
         <div className="card-header">
          <div className="card-body">
      {props.cart.map((each,index)=>{
      total.push(each.price)
       sum = total.reduce((a, b) => {
        return a + b;
      });

      return (
              <>
                 
            <CheckoutList data={each} key={index} />
            </>
        )
              }
      )}
      </div>
                </div>
                </div> 
                 
                </div> 
                <div className="col-sm-6">
        <div className="pt-4">

          <h5 className="mb-3">The total amount of</h5>
          <span><strong>Cash on deivery</strong></span>

          <ul className="list-group list-group-flush">
           
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
                
              
              </div>
              
              <span><strong>{sum}</strong></span>
            </li>
          </ul>

          <Link to='/Checkout/Address'>  <button type="button" className="btn btn-primary btn-block">Next</button></Link>

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

Summary= withRouter(Summary) ;

export default connect ((state)=>{

  return{
cart:state.CartReducers.cart,

isloading:state.CartReducers.isloading,
len:state.CartReducers.total

  }


})(Summary) ;