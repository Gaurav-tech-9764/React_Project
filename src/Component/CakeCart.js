import { Link, withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import DeleteCartMiddleWare from "../reduxStore/DeleteCartMiddleWare"



function  CakeCart(props) {

  return(    
            <div className="row mb-4">
                        <div className="col-md-5 col-lg-3 col-xl-3">
                        <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img
                            src={props.data.image}
                            className="card-img-top"
                            
                            alt={props.data.name}
                            title={props.data.name}
                          />
                        </div>
                        </div>
                        <div className="col-md-7 col-lg-9 col-xl-9">
                        <div>
                            <div className="d-flex justify-content-between">
                            <div>
                                <h5>{props.data.name}</h5>
                                <p className="mb-3 text-muted text-uppercase small">{props.data.price}</p>
                                
                                
                            </div>
                            <div>
                                <h5>Quantity</h5>
                                <h4>{props.data.quantity}</h4>
                                
                            </div>
                            <div>
                            <button type="button" onClick={() =>props.dispatch(DeleteCartMiddleWare(props.data.cakeid,props))} class="btn btn-outline-danger btn-block">Remove</button>
                                
                            </div>
                             
                            </div>
                          
                        </div>
                        </div>
                    </div> 
             )
}
CakeCart =withRouter(CakeCart)

export default connect()(CakeCart)

