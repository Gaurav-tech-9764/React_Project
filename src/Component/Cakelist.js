
import Cake from './Cake.js'
import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 

function Cakelist() {

        var [cakes , setCakes] = useState([])
        var [isloading, setLoading] =useState(true)

        useEffect(()=>{
            
                axios({

                        method:"get",
                        url: process.env.REACT_APP_BASE_URL  + '/allcakes'

                }).then((response)=>{


setCakes(response.data.data)

setLoading(false)
console.log("loadinf check", isloading)
                },(error)=>{

console.log("these are the error",error);
                        setLoading(false)
                })



        },[] )


  var [Likes, setLikes] = useState(0)
  var [DisLikes, setDislikes] = useState(0)
        

        var style={display: "flex", justifyContent: "center", alignItems: "center"}
      
    return(<div>


       <div id="carouselExampleControls" className="carousel slide"data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100"  style={{height: "550px", width: "300px"}} src="/img/4.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{height: "550px", width: "300px"}} src="/img/6.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{height: "550px", width: "300px"}} src="/img/7.jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


<div>Hey this is my first post</div>    
    <label><b>{Likes}</b></label>
    <span> </span>
    <button onClick={()=>{setLikes(Likes+1)}} class="btn btn-primary">Like</button>
    <span> </span>
    <button onClick={()=>{setDislikes(DisLikes+1)}}class="btn btn-danger">Dislike</button>
    <span> </span>
    <label><b>{DisLikes} </b></label>



    &nbsp;&nbsp; &nbsp;&nbsp;





   {!isloading &&
    
    <div className="row">
    {cakes.map((each,index)=>{
                return (
                    <Cake data={each} key={index} />
                     )
            }
    )}
    </div>

}    

{isloading && <div className="loader center">


    <Loader type="Circles"style={style} height="200" width="200" />
   
    </div>
    

} 


    </div>
 
  
        
      
        )
    
}

export default Cakelist
