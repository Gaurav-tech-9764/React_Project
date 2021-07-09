import axios from "axios"


 function LoginMiddleWare(data,data2) {

    return function (dispatch) {
        dispatch({

            type:"LOGIN_STARTED"
        })
        
         var apiurl= process.env.REACT_APP_BASE_URL + '/login'

    axios({
              method:"post",
              url: apiurl,
              data:data
    
    }).then((response)=>{
 
   
    if(response.data.message === undefined){
    
          localStorage.token=response.data.token
          localStorage.name=response.data.name
          localStorage.email=response.data.email
      dispatch({
      
        type:"LOGIN",
        payload:{
          token:response.data.token,
          username:response.data.name,
          email:response.data.email
        }
      })
      
      data2.history.push('/')
    
      
    }
    else{
    
    alert(response.data.message)
    data2.history.push('/')
    }
    
    
    },(error)=>{
      console.log("this is the errors",error)
     
    })
        
    }
    
}

export default LoginMiddleWare

