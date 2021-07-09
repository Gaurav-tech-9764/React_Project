import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import { Redirect, withRouter } from "react-router";

const MyOrders=(props) =>{
   
    var [isloading, setLoading] =useState(true)
   
    const [MyOrders, setMyOrders] = useState([])
    var [notFound, setnotFound] =useState(false)
    useEffect(() => {
        axios({
            url: process.env.REACT_APP_BASE_URL + '/cakeorders',
            method: 'post',
            headers:
            {authtoken:localStorage.getItem('token')}
        }).then(response => {

            if(response.data.cakeorders){
                console.log("this is the ordetr", response)
             
            
                setMyOrders(response.data.cakeorders)
                setLoading(false)

            }
            else{
                alert(response.data.error)
                setLoading(false)
                setnotFound(true)
          
            }
           
           
        }, err => {

           
        })
    }, [])
   
    console.log(".......>>>>>this is the my>>>",MyOrders)
    var style={display: "flex", justifyContent: "center", alignItems: "center"}
var style2={display: "block","margin-left": "auto","margin-right": "auto" }
    return(
 
<>


 {!isloading &&


        <div className="container col-md-12">
           <div className="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
           My Orders
     </div> 

  
     
     {  MyOrders.map((each, index) => {
                     return(
                                <>
                       
                        <div className="col-sm-6">
                        
                            <div className="card-body">
                            <ul className="list-group list-group-flush">
                        <li className="list-group-item"><button class="btn btn-success" type="button" data-toggle="collapse" data-target={"#collapse"+(index)} aria-expanded="false" aria-controls="collapseExample">
                     Order ID :-<b>{each.orderid}#At:-{each.orderdate}</b> 
                        </button></li>
                    </ul>
                        </div>
                    </div>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                        
                        <div className="col-sm-12">
                    
                            <div class="collapse" id={"collapse"+(index)}  >
                    <div class="card-desk">
                    {
                        each.cakes.map((eachCake, CakeIdex) =>{
                            return(
                                <div class="card-deck justify-content-around" >

                                <div class="col-sm-8">
                               
                                  <div class="card">
                              <div className="container">
                                   <img
                                  src={eachCake.image}
                                  style={{
                                    resizeMode: "cover",
                                    height: "8rem",
                                    width: "8rem"    
                                  }} 
                                  className="card-img-top"
                                  alt={eachCake.name}
                                  title={eachCake.name}
                                />
                                
                                </div>
                                 
                                      <h5 class="card-title">{eachCake.name}</h5>

                                      <h5 class="card-title">Quantity :- {eachCake.quantity}</h5>
                                      <p class="card-text"><b>Price:-</b>{eachCake.price}</p>
                                    
                                  
                                  </div>
                                
                                </div>
                              
                                </div>

                            )
                            

                        })
                

                    }<div class="card">
                    <h5 class="card-header">Details Regarding the order</h5>
                    <div class="card-body">
                      <h5 class="card-title"><b>Name:-</b> {each.name}</h5>
                      <h5 class="card-title"><b>Address :- </b> {each.address},{each.city},{each.pincode}</h5>
                      <h5 class="card-title"><b>Total price :- </b> {each.price}</h5>
                      <h5 class="card-title"><b>Mode :- </b> {each.mode}</h5>
                     
                    </div>
                  </div>
                    
                        </div>

                        
                    </div>
                    </div>

               
                        
                          
                      
                      
                        
        </> )
         })
    }

{notFound && <div className="col-sm-6 btn btn-danger" style={style2}>  
         order not Found
     </div> 
    

} 
 </div>

}


{isloading && <div className="loader center">


    <Loader type="Circles"style={style} height="200" width="200" />
   
    </div>
    

} 

         
       </>       
    
    )
    
}


export default withRouter(MyOrders)