import axios from "axios"
import { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"
import Loader from "react-loader-spinner";
import {connect} from "react-redux"
import CartMiddleWare from "../reduxStore/CartMiddleWare.js"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 



function CakeDetails(props) {
        var params = useParams()
        var [cakeDetails, setCakeDetails] = useState([])
        var [isloading, setLoading] =useState(true)

        console.log("cake id", params.cakeid)

      useEffect(() => {
            let apiurl
            console.log(params)
            if(params){
              apiurl= process.env.REACT_APP_BASE_URL  + '/cake/' +params.cakeid

              axios({url:apiurl, method:"get"}).then((response)=>{
            if(response.data.message === "Success"){
             
            setCakeDetails(response.data.data)
            setLoading(false)

            }
              },(error)=>{

                alert("Can not fetch data")
              })


            }
    },[])

var style={display: "flex", justifyContent: "center",alignItems: "center"}
      


    return(
<>

      {!isloading &&
        <div className="container">
        <div className="row  justify-content-between">
            <div className="col-mt-4 "  style={{"margin-top": "70px"}}>
            <div className="card mt-6" style={{width: "20rem", "border": "5px solid #565", "marginTop": "5rem!important" }}>
  <img src={cakeDetails.image} className="card-img-top" alt="..." />
  
  </div>
            </div>
          <br></br>
            <div className="col-md-8 col-sm-6 border border-info"  style={{"margin-top": "20px"}}>
            <div className="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
         {cakeDetails.name}
   </div>
   <hr></hr>
   <span><b>Cake Description :- </b><span></span>{cakeDetails.description}</span><hr></hr>
   <span><b>Cake flavour :-</b> {cakeDetails.flavour}</span><hr></hr>
   <span><b>Cake Weight :-</b> {cakeDetails.weight}</span><hr></hr>
   <span><b>Cake Type :-</b> {cakeDetails.type}</span><hr></hr>
   <span><b>Cake Price :-</b> {cakeDetails.price}</span><hr></hr>
 
   
    <span>
   {localStorage.token &&  <button type="button" onClick={() =>props.dispatch(CartMiddleWare(cakeDetails,props))} className="btn btn-outline-primary btn-block">Add to Card</button>}
   </span>  



  
   {!localStorage.token && <Link to="/Login"> <button type="button" className="btn btn-outline-danger  btn-block">Login First For Add To Cart</button></Link>}
            <br></br>
            </div>
        </div>
    </div>
      
      
      
      
      }

{isloading && <div className="loader center">


<Loader type="Circles" style={style} height="200" width="200" />

</div>


} 


  
</>
   
 


  
    )

}

export default connect()(CakeDetails)


