function CartReducers(state={
  
cart:[] ,
isloading:false,
totalPrice:0,

total:0



}, action){
    
        switch(action.type){
    
            case "ADDCART":{
                    state={...state}
                    state.cart.push( action.payload?.data)
                  state.total=state.cart.length

                    state.isloading=true
                 console.log("this is the  in card.......!!",state.cart)
                  
                    return state
            }
            case "UPDATECART":{

                state={...state}
                state.cart= action.payload?.data
                state.total=state.cart.length
                        
                state.isloading=true
             
              
             console.log("this is the state lengh update in card..price.....!!",state.total)
              
                return state
        }
        case "REMOVE_ONE_FROM_CART":{

                state={...state}
                
              state.cart.splice(state.cart.indexOf(action.payload?.data),action.payload?.data);
                 
              state.total=state.cart.length
                state.isloading=true
             
              
             console.log("this is the state Remoove in card..price.....!!",state)
              
                return state
        }
        case "CLEAR_CART":{

                state={...state}
                
              state.cart=[]
              state.total=state.cart.length
                        
                state.isloading=true
             
              
             console.log("this is the state Clear in card..price.....!!",state  )
              
                return state
        }
        case "ORDER_CONFIRM":{

                state={...state}
                
              state.cart=[]
                        
                state.isloading=true
             
              
             console.log("this is the state order in card..price.....!!",state.cart)
              
                return state
        }
          
            
       
           
                    default : return state
        }
    } 
    
    
    
    export default CartReducers