import { Link, withRouter } from 'react-router-dom'

function  Cake(props) {

if(props.data){

  return(
                <div className="card-deck justify-content-around" >

              <div className="col-sm-8">
              <div className="zoom">
                <div className="card"style={{width: "18rem"}}>

                <Link to={'/CakeDetails/'+props.data.cakeid}>  <img
                src={props.data.image}
                style={{
                  resizeMode: "cover",
                  height: "13rem",
                  width: "18rem"    
                }} 
                className="card-img-top"
                alt={props.data.name}
                title={props.data.name}
              /></Link>
                  <div className="card-body" >
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="card-text"><b>Price:-</b>{props.data.price}</p>
                  
                  </div>
                </div>
                </div>
              </div>

              </div>
    
        )




  }
      else{

        return null
      }



}

export default Cake

