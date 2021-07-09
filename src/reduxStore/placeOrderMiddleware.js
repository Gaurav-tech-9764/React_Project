import { withRouter } from "react-router"
import axios from "axios"
import { connect } from "react-redux"

function placeOrderMiddleware(name,Address,Number,city,pincode,props,sum){
  

return function(dispatch){

    


var data={"address":Address,"cakes":props.cart,"city":city,"name":name,"phone":Number,"pincode":pincode,"price":sum}

axios({
    url: process.env.REACT_APP_BASE_URL + '/addcakeorder',
    method: 'post',
    data: data,
    headers:
    {authtoken:localStorage.getItem('token')}
}).then(responce => {
    alert(responce.data.messageg)
    dispatch({
        type: 'ORDER_CONFIRM',
        payload: {
           
        }
    })
    props.history.push('/MyOrders')
    console.log('responce from the order', responce)
    
}, err => {})
   
}

}

export default placeOrderMiddleware 
