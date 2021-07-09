import React, { Component } from 'react';
import { useEffect, useState } from "react"
import './App.css';
import axios from "axios";
import { connect } from "react-redux"
import Navbar from './Component/Navbar.js';
import NullResult from './Component/NullResult.js';
import EmailCheck from './Component/EmailCheck.js';
import CakeDetails from './Component/CakeDetails.js';
import CakeSearch from './Component/CakeSearch.js';
import Cakelist from './Component/Cakelist.js';
import Login from './Component/Login.js';
import Card from './Component/Card.js';
import Checkout from './Component/Checkout.js';
import MyOrders from './Component/MyOrders'; 
import Register from './Component/Register.js';
import  {BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import AddCake from './Component/AddCake';


 var Project={
    projectname:"My Food Corner",
     username:"Gaurav",
      email:"gaurav@gmail.com" ,
       Image:"/img/3.jpeg"
    }

function App(props){

  console.log("this is the next text",props)

    useEffect(() => {
        let apiurl= process.env.REACT_APP_BASE_URL +'/cakecart'  
          axios({url:apiurl, method:"POST", data:{},headers:{authtoken:localStorage.getItem('token')}}).then((response)=>{
            console.log("this is the response",response)
            if(response.data.data){
      
              props.dispatch({
                type:"UPDATECART",
                payload:{
                  data:response.data.data
                }
                
                })
               }  
         },(error)=>{
                        alert("Can not fetch data")
          })
        },[props.token])

        return(
          <div>
        <Router>
                <Navbar navbar={Project} ></Navbar>
          <Switch>
                <Route exact path="/" component={Cakelist}></Route>
                <Route exact path="/EmailCheck" component={EmailCheck}></Route>
                <Route exact path="/Login" component={Login}></Route>
                <Route exact path="/AddCake" component={AddCake}></Route>
                <Route exact path="/register"  component={Register}></Route>
                <Route exact path="/CakeSearch" component={CakeSearch}></Route>
                <Route exact path="/CakeDetails/:cakeid" component={CakeDetails}></Route>
                <Route exact path="/MyOrders" component={MyOrders}></Route>
                {props.token &&  <Route exact path="/card" component={Card}></Route>} 
                {props.token && <Route path="/Checkout"  component={Checkout}></Route>} 
                <Route exact path="/*" component={NullResult} />
           </Switch>
               {/* <EmailCheck></EmailCheck>
              <br></br>
              <Register></Register>
             */}

          </Router>
       </div>
)
}
export default connect ((state)=>{

  return{
    cart:state.CartReducers.cart,
token:state.AuthReducers.token,
isloggedin:state.AuthReducers.isloggedin,


  }


})(App) ;


