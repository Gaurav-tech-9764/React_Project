
import { withRouter } from 'react-router-dom'
import axios from "axios"
import Cake from './Cake.js'

import { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"
import querystring from "query-string" 
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 



function CakeSearch(props) {
        
        var query = querystring.parse(props.location.search)
        var [searchCakes , setsearchCakes] = useState([])
        var [isloading, setLoading] =useState(true)
        var [length, setLength] =useState(0)



 useEffect(() => {
    let apiurl

    if(query){
      apiurl=  process.env.REACT_APP_BASE_URL  + '/searchcakes?q=' +query.Cakes
    
      axios({url:apiurl, method:"get"}).then((response)=>{
      
     if(response.data.data){
        if(response.data.data.length>0){
          setLength(response.data.data.length)
          setsearchCakes(response.data.data)
          console.log("this is the respon",response)
          setLoading(false)
      }
      else{
          setLoading(false)
      }
    }
   else{
        props.history.push("/*")
   }
  },(error)=>{
          alert("Can not fetch data")
      })
  }
    },[])

    var style={display: "flex", justifyContent: "center",alignItems: "center"}
    var style1={display: "flex",  backgroundColor:" DodgerBlue",justifyContent: "center",alignItems: "center"}
    return(

      <>
          {!isloading &&  
         
          <div className="row">
            {length<=0 && <div className="col-md-12">
            <h1 style={style1}>Data not Found</h1>
            </div> }
            {length>0  &&  <div className="col-md-12">
            <h1 style={style1}>Total {length} Cakes Found for the {query.Cakes}</h1>
            </div>
            }
        {searchCakes.map((each,index)=>{
                    return (
                        <Cake data={each} key={index} />
                         )
                }
        )}
        </div>
     }
        {isloading && <div className="loader center">


        <Loader type="Circles" style={style} height="200" width="200" />

        </div>
            }
 </>

     
    )
}

export default CakeSearch