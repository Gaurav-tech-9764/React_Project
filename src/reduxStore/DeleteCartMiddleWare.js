import axios from "axios"
import { connect } from "react-redux"
import { Redirect, withRouter } from "react-router"
import thunk from 'redux-thunk';

function DeleteCartMiddleWare(cakeid,props) {
    var cakestrid= parseInt(cakeid)
    console.log("this is the props in middle",props)

    return function(dispatch){
     axios({
        url: process.env.REACT_APP_BASE_URL  + '/removeonecakefromcart',
        method: "POST",
        data:{cakeid:cakestrid},
        headers:
        {authtoken:localStorage.getItem('token')}
        }).then(response => {
alert(response.data.message )

        dispatch({
        type: "REMOVE_ONE_FROM_CART",
        payload: {
        data:cakestrid
        }
        })

        }, err => {


        }) 


    }



    
}




export default DeleteCartMiddleWare