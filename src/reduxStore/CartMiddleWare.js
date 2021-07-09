import axios from "axios"


function CartMiddleWare(data,data2) {


    return function (dispatch) {
  
      let apiUrl=process.env.REACT_APP_BASE_URL +'/addcaketocart'
      let data1={
        cakeid:data.cakeid,
        name:data.name,
        image:data.image,
        price:data.price,
        weight:data.weight,
       
      }
      axios({
        url:apiUrl,
        method:"POST",
        data:data1,
        headers:{authtoken:localStorage.getItem('token')
      }
      }).then(response=>{
      console.log("this is the latest result",response)
       var data3=response.data.data
       console.log("this is the latest data3.......",data3)
    dispatch({
      type:"ADDCART",
      payload:{
        data:data3
      }
      
      })
        alert(response.data.message)
        data2.history.push('/card')
      
      },error=>{})
        
    }
    
}


export default CartMiddleWare