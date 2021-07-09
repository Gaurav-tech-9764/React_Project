import {Component} from "react"
import { withRouter } from "react-router"
import {connect} from "react-redux"
import LoginMiddleWare from "../reduxStore/LoginMiddleWare.js"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 

class Login extends Component{
///state initilizaion
   constructor(props){
        super(props)
        this.state={

          email: '',

          password:'',
          
          errors: {}
          
          }
          this.handleChangeEmail = this.handleChangeEmail.bind(this);
          this.handleChangePassword = this.handleChangePassword.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChangeEmail(e) {

      this.setState({email:e.target.value});
      
    }
handleChangePassword(e) {

      this.setState({password:e.target.value});
    
    }
handleSubmit(event) {

        event.preventDefault();

    if(this.validate()){
    console.log("this is the stte",this.state)
      this.props.dispatch(LoginMiddleWare(this.state,this.props))
        }

  }


  //validate

  validate(){
    
    let errors = {};

    let isValid = true;
    
    if (!this.state.email) {

      isValid = false;

      errors["email"] = "Please enter your email Address.";

    }

    if (typeof this.state.email !== "undefined") {

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

      if (!pattern.test(this.state.email)) {

        isValid = false;

        errors["email"] = "Please enter valid email address.";

      }

    }

    if(!this.state.password){

isValid =false;

errors["password"] = "Please enter your Password."

    }


    
 this.setState({

      errors: errors

    });



    return isValid;

}
render() {

 var style={display: "flex", justifyContent: "center", alignItems: "center"}

  
  return(
    <>

            {!this.props.isLoading && <div className="container">
              
            <div className="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
            Login
        </div> 
          <div  className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>
          

        <div className="card-body p-4" >


          
          <form  onSubmit={this.handleSubmit}>
        
          
          <div className="form-group">
          
              <label for="email">Email Address:</label>
          
              <input type="text"  name="email"  value={this.state.email} onChange={this.handleChangeEmail} className="form-control" placeholder="Enter email" id="email" />
              <div className="text-danger">{this.state.errors.email}</div>
          
            </div>
          
          <div className="form-group">
          
          <label for="password">Password:</label>
          
          <input type="password"  name="password" className="form-control" value={this.state.password} onChange={this.handleChangePassword} placeholder="Password" id="password" />
          <div className="text-danger">{this.state.errors.password}</div>
          
          </div>
          
          
            <input type="submit" value="Login" className="btn btn-success" />
          
          </form>
          </div>
          </div>
          </div>


            }
            {this.props.isLoading && <div className="loader center">


        <Loader type="Circles"style={style} height="200" width="200" />

        </div>


        } 

            
          </>
  )
          

}
}


Login = withRouter (Login);
export default connect ((state)=>{

  return{
   isLoading:state.AuthReducers.isLoading,


  }


})(Login) ;