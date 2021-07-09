import {Link, Redirect, withRouter} from "react-router-dom"
import { connect } from "react-redux"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import { useEffect, useState } from "react";
import placeOrderMiddleware from  "../reduxStore/placeOrderMiddleware"


function Address(props)
{
    
          var [name, setName]= useState('')
          var [Address, setAddress]= useState('')
          var [Number, setNumber]= useState('')
          var [city, setCity] = useState('')
          var [pincode,setPincode] = useState('')
          var [error,setErrors] =useState([])

    const  handelname=(e)=>
    {

      setName({name:e.target.value})
    
    }
    const  handelAddress=(e)=>
    {

    
    }
    const  handelNumber=(e)=>
    {

      setNumber({Number:e.target.value})

    }
    const  handelCity=(e)=>
    {

      setCity({city:e.target.value})

    }
    const  handelPincode=(e)=>
    {

      setPincode({pincode:e.target.value})
    
    }

  const handleSubmit=(event)=>{
    event.preventDefault();

    if(validate()){
  

      props.dispatch(placeOrderMiddleware(name.name,Address.Address,Number.Number,city.city,pincode.pincode,props,sum))

    }


  }
 const validate= ()=> {

      
            let errors = {};

            let isValid = true;


          if(!name){

          isValid= false;

          errors["name"]="Please enter your Name."
          }



            if (!Address) {

              isValid = false;

              errors["Address"] = "Please enter your Address.";

            }

            if(!Number){

          isValid =false;

          errors["Number"] = "Please enter your number."

            }

            if(!city){

              isValid =false;
              
              errors["city"] = "Please enter your city."
              
                }
                if(!pincode){

                  isValid =false;
                  
                  errors["pincode"] = "Please enter your pincode."
                  
                    }
              


            
                    setErrors(errors);



            return isValid;

    }



var total=[]
var sum
{props.cart.map((each,index)=>{
        total.push(each.price)
         sum = total.reduce((a, b) => {
          return a + b;
        });
    })
}
    

    return(

            <>
          <div className="container">
          <div className="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
        Fill Delivery Address
    </div> 
          <div  className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>
            <div className="card-body p-4" >
              <form onSubmit={handleSubmit} >
          <div className="form-group" >
          
          <label for="name"><b>Name :-</b></label>
          
          <input type="text"  name="name" onChange={handelname} className="form-control" placeholder="Name" id="name" />
          <div className="text-danger">{error.name}</div>
            </div>
          
          <div className="form-group">
          
              <label for="Address"><b>Address :-</b></label>
          
              <input type="text"  name="Address" onChange={handelAddress}  className="form-control" placeholder="Enter Address" id="Address" />
              <div className="text-danger">{error.Address}</div>
          
            </div>
          
          <div className="form-group">
          
          <label for="password"><b>Mobile Number :-</b></label>
          
          <input type="text"  name="Number" className="form-control" onChange={handelNumber}   placeholder="Enter Mobile NUmber" id="Number" />
          <div className="text-danger">{error.Number}</div>
          
          </div>
          <div className="form-group">
          
          <label for="password"><b>City :-</b></label>
          
          <input type="text"  name="City" className="form-control" onChange={handelCity}  placeholder="Enter City" id="City" />
          <div className="text-danger">{error.city}</div>
          
          </div>
          <div className="form-group">
          
          <label for="password"><b>Pincode :-</b></label>
          
          <input type="text"  name="Pincode" className="form-control" onChange={handelPincode}placeholder="Enter Pincode" id="Pincode" />
          <div className="text-danger">{error.pincode}</div>
          
          </div>
          <div className="form-group">
          
          <label for="password"><b>Total Cost :-</b></label>
          
          <input type="text"  name="TotalPrice" className="form-control"  value={sum} id="TotalPrice"  disabled/>
          
          
          </div>



          
          <input type="submit" value="Confirm Order" className="btn btn-success" />
          
          </form>
          </div>
          </div>
          </div>
            </>
    )
}


Address= withRouter(Address) 

export default connect ((state)=>{

  return{
cart:state.CartReducers.cart,

isloading:state.CartReducers.isloading,
len:state.CartReducers.total

  }


})(Address) 