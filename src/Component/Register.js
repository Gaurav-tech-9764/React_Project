import {Component} from "react"
import axios from "axios"
import { withRouter } from "react-router"


const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


class Register extends Component{
///state initilizaion
   constructor(props){

        super(props)
          this.state={

            email: '',
            
            name:'',
            
            password:'',
            
            errors: {}
            
            }

          this.handleChangeName = this.handleChangeName.bind(this);
          this.handleChangeEmail = this.handleChangeEmail.bind(this);
          this.handleChangePassword = this.handleChangePassword.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
}
handleChangeName(e) {

    this.setState({name:e.target.value});
    
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
                        var apiurl= process.env.REACT_APP_BASE_URL + '/register'

                        var data={

                          "name":this.state.name,
                          
                          "email":this.state.email,
                        "password":this.state.password
                          
                          }

                          console.log("this is the data",data);
                    axios({

                          method:"post",
                          url: apiurl,
                          data:data

                    }).then((response)=>{
                    console.log("this is the response...",response)

                    alert(response.data.message)
                    this.props.history.push('/')
                 },(error)=>{
                      console.log("this is the errors",error)
                      alert(error.data.message)
                    })

          }

  }
//validate
  validate(){

         let errors = {};
         let isValid = true;

     if(!this.state.name){

                isValid= false;

                errors["name"]="Please enter your Name."
              }
     if (!this.state.email){

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
  return(
    <div className="container">
       <div className="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
       Register
 </div> 
      <div  className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>
      

    <div className="card-body p-4" >
  <form  onSubmit={this.handleSubmit}>
      <div className="form-group" >
      
      <label for="name">Name:</label>
      
      <input type="text"  name="name" value={this.state.name}  onChange={this.handleChangeName} className="form-control" placeholder="Name" id="name" />
      <div className="text-danger">{this.state.errors.name}</div>
      
      </div>
      
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
      <input type="submit" value="Register" className="btn btn-success" />
      
      </form>
      </div>
      </div>
      </div>
          
          )

}

}

export default withRouter( Register)