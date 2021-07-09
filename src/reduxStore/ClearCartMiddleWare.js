
import axios from "axios"

function ClearCartMiddleWare(props){
console.log(".........",props)
return function(dispatch){
    axios({
        url: process.env.REACT_APP_BASE_URL  + '/clearcart',
        method: "POST",
        data:{},
        headers:
        {authtoken:localStorage.getItem('token')}
        }).then(response => {
alert(response.data.message)

dispatch({
    type: "CLEAR_CART",
   
    })

        }, err => {


        })
}

}


export default ClearCartMiddleWare