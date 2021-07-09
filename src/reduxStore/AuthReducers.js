function AuthReducers(state={
isloggedin:localStorage.token?true:false,
token:localStorage.token,
isLoading:false,

username:localStorage.name?localStorage.name:undefined,
email:localStorage.email?localStorage.email:undefined

}, action){

    switch(action.type){
        case "LOGIN_STARTED":{
            state={...state}
            state.isLoading=true

         
            console.log("this is login state",state)
            return state
    }
        case "LOGIN":{
                state={...state}
                state["token"] = action.payload?.token
                state.isloggedin=true
                state.username=action.payload?.username
                state.email=action.payload?.email
             
                console.log("this is login state",state)
                return state
        }
        case "LOGOUT":{
            state={...state}
            state["token"] =localStorage.clear()
            state.isloggedin=false
            state.username=undefined
            state.email=undefined
            console.log("this is the token after logout",state)
            return state
    }
   
       
                default : return state
    }
} 



export default AuthReducers