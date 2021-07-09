import {userState, userEffect, useState} from "react"
import { connect } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons'


import { Link, withRouter } from 'react-router-dom'

let stringsearch



function Navbar(props) {

  
  var [SearchFor, setSearchFor] = useState([])

  var[loggedin, setlogin] =useState(false)


  let logout =()=>{
  
   setTimeout(
     ()=>{
      props.dispatch({
        type:"LOGOUT"
      })
      alert("You Have successfully logged out!!")
      props.history.push("/")
      props.history.go("/")

     },1000
   )

  
}
let login =()=>{
  setlogin(true)
}
let logouttest=()=>{

  setlogin(false )
}

////search element


function SearchCake(event) {
  event.preventDefault()
 
  setSearchFor(stringsearch)
     alert("You have search for" +  stringsearch)

     if(stringsearch){


      var url="/CakeSearch?Cakes="+stringsearch
      props.history.push(url)
      props.history.go(url)
     }

 
 }
 
 function showSearchText(event) {
  
   stringsearch=event.target.value
    console.log('event value',stringsearch)
 
 }
 



 return (
   
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/"><img class="card-img-top" style={{height: "50px", width: "80px"}}  src={props.navbar.Image}  alt="Card image cap" /></Link>
    &nbsp;&nbsp;<a className="navbar-brand" href="#"><b>{props.username}</b></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">{props.email}<span className="sr-only">(current)</span></a>
      </li>

   

    
  {!props.isloggedin && <li className="nav-item">
<Link to="/register"><button className="btn btn-outline-primary my-2 my-sm-0"  title="Register" type="submit"><FontAwesomeIcon icon={faSignInAlt} />&nbsp;Register</button></Link>

</li>}
&nbsp;&nbsp;
{!props.isloggedin && <li className="nav-item">
<Link to="/Login"><button className="btn btn-outline-primary my-2 my-sm-0" title="Login" type="submit"><FontAwesomeIcon icon={faSignInAlt} />&nbsp;Login</button></Link>

</li>} &nbsp;&nbsp; &nbsp;&nbsp;
{props.isloggedin &&  <li className="nav-item">
      <button className="btn btn-outline-danger my-2 my-sm-0" onClick={logout}title="Logout" type="submit"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;Log out</button>
   
      </li>}
      <li className="nav-item">
    
   
      </li>

  
     
    </ul>
    {props.isloggedin && <>


   {props.email ===  "ashu.lekhi0540@gmail.com"&& <Link to="/AddCake"> <button className="btn btn-outline-success my-2 my-sm-0" title="Add Cakes" type="submit">Add Cakes<span class="badge badge-light"></span></button></Link>
  } </>}
    &nbsp;&nbsp; &nbsp;&nbsp;
    {props.isloggedin &&  <Link to="/card"> <button className="btn btn-outline-success my-2 my-sm-0" title={props.len}type="submit"><FontAwesomeIcon icon={faCartPlus} />&nbsp;<span class="badge badge-light">{props.len}</span></button></Link>}
    &nbsp;&nbsp; &nbsp;&nbsp;
    {props.isloggedin &&  <Link to="/MyOrders"> <button className="btn btn-outline-primary my-2 my-sm-0" title="My Orders" type="submit">My Orders<span class="badge badge-light"></span></button></Link>}
    &nbsp;&nbsp; &nbsp;&nbsp;

    <form className="form-inline my-2 my-lg-0">
   
      <input className="form-control mr-sm-2"  onChange={showSearchText} type="search" placeholder="Search"  aria-label="Search" />
     
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={SearchCake} type="submit">Search</button>
    </form>
    &nbsp;&nbsp;
    {!loggedin && 
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={login} type="submit">Login</button>
 
   }

{loggedin &&  <li className="nav-item">
      <button className="btn btn-outline-danger my-2 my-sm-0" onClick={logouttest} type="submit">Log out</button>
   
      </li>}

  </div>
</nav>

  );

}

Navbar = withRouter (Navbar);
export default connect ((state)=>{

  return{
username:state.AuthReducers.username,
isloggedin:state.AuthReducers.isloggedin,
email:state.AuthReducers.email,
len:state.CartReducers.total

  }


})(Navbar) ;