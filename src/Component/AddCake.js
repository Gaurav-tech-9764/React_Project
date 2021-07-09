
import {useEffect, useState} from "react";
import axios from "axios";
import { withRouter } from "react-router";

function AddCake(props) 
{
        var [CakeImage,setCakeImage] = useState('')
        var [CakeName,setCakeName] = useState('')
        var [CakeDescription, setCakeDescription] = useState('')
        var [CakePrice, setCakePrice] = useState('')
        var [CakeWeight, setCakeWeight] = useState('')
        var [CakeFlavour, setCakeFlavour] = useState('')
        var [CakeType, setCakeType] = useState('')
        var [CakeEggless, setCakeEggless] =useState(false)
        var [CakeIgrediants,setCakeIgrediants] = useState ('')  
        var [error, setError] = useState([]) 
        var [uploadCakeImage, setUploadCakeImage] = useState('')
        var Cakeingrediants = []

  
  const fileUpload = (event) => {
    setCakeImage(URL.createObjectURL(event.target.files[0]))
    let formData = new FormData()
    formData.append('file', event.target.files[0])
 
    axios({
          url: process.env.REACT_APP_BASE_URL + '/upload',
          method: 'post',
          data: formData,
          headers:
          {authtoken:localStorage.getItem('token')}
    }).then(response => {
      console.log("thjis is the respoine image",response)
        setUploadCakeImage(response.data.imageUrl)
    }, err => {})
  }
  
const handleSubmit=(event)=>{
    event.preventDefault();
    if(validate()){
     Cakeingrediants=CakeIgrediants.split(",")

    var data = {name: CakeName, description: CakeDescription, price: CakePrice, weight: CakeWeight, image: uploadCakeImage,
      type: CakeType, eggless: CakeEggless, flavour: CakeFlavour, ingredients: Cakeingrediants}

      axios({
        url: process.env.REACT_APP_BASE_URL + '/addcake',
        method: "post",
        data: data,
        headers:
        {authtoken:localStorage.getItem('token')}

    }).then(response => {
      alert("Adding Cake " + response.data.message)
      props.history.push('/')
       
    }, err => {})
    }
 }
  const validate= ()=> {

  
    let errors = {};
  
    let isValid = true;
  
  
  if(!CakeName){
  
  isValid= false;
  
  errors["CakeName"]="Please enter Cake Name."
  }
  
  
  
    if (!CakeDescription) {
  
      isValid = false;
  
      errors["CakeDescription"] = "Please enter Cake Description  .";
  
    }
  
    if(!CakePrice){
  
  isValid =false;
  
  errors["CakePrice"] = "Please enter Cake Price."
  
    }
  
    if(!CakeWeight){
  
      isValid =false;
      
      errors["CakeWeight"] = "Please enter Cake weight."
      
        }
        if(!CakeType){
  
          isValid =false;
          
          errors["CakeType"] = "Please enter Cake Type."
          
            }
            if(!CakeFlavour){
  
              isValid =false;
              
              errors["CakeFlavour"] = "Please enter Cake flavour."
              
                }

                    if(!CakeImage){
  
                      isValid =false;
                      
                      errors["CakeImage"] = "Please Upload Cake Image."
                      
                        }
     
                       
                     if(!CakeIgrediants){
  
                      isValid =false;
                      
                      errors["CakeIgrediants"] = "Please Enter the ingrediants."
                      
                        }
          setError(errors);
      return isValid;
  
  }

return(
<>
 <div className="container">
    <div className="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
  Add Cake
    </div> 
    <div  className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>
      <div className="card-body p-4" >
        <form onSubmit={handleSubmit} >
            <div className="form-group ">
            <label for="Cakename"><b>Cake Image :-</b></label>
                <input type="file" name='CakeImage'  onChange={fileUpload}  className="form-control" />
                <div className="text-danger">{error.CakeImage}</div> 
                <p>
                {CakeImage && <img src={CakeImage} alt="Cake" style={{width: '20%'}}/> }    
                </p>
                                  
            </div>
             <div className="form-group" >
                <label for="Cakename"><b>Cake Name :-</b></label>
                 <input type="text"  name="CakeName" onChange={e => setCakeName(e.target.value)} className="form-control" placeholder="Cake Name" id="CakeName" />
              
               <div className="text-danger">{error.CakeName}</div>
             </div>
         
             <div className="form-group">
               <label for="CakeDescription"><b>Cake Description :-</b></label>
                 <input type="text"  name="CakeDescription"className="form-control" onChange={e => setCakeDescription(e.target.value)} placeholder="Cake Description" id="CakeDescription" />
                 <div className="text-danger">{error.CakeDescription}</div>
             </div>
             <div className="form-group">
               <label for="CakePrice"><b>Cake Price :-</b></label>
                 <input type="text"  name="CakePrice" className="form-control" onChange={e => setCakePrice(e.target.value)} placeholder="Cake Price" id="CakePrice" />
                 <div className="text-danger">{error.CakePrice}</div>
             </div>
             <div className="form-group">
               <label for="CakeWeight"><b>Cake Weight :-</b></label>
                 <input type="text"  name="CakeWeight " className="form-control" onChange={e => setCakeWeight(e.target.value)} placeholder="Cake Weight" id="CakeWeight" />
                 <div className="text-danger">{error.CakeWeight}</div>
            </div>
            <div className="form-group">
               <label for="CakeFlavour"><b>Cake Flavour :-</b></label>
                 <input type="text"  name="CakeFlavour " className="form-control" onChange={e => setCakeFlavour(e.target.value)} placeholder="Cake Flavour" id="CakeFlavour" />
                 <div className="text-danger">{error.CakeFlavour}</div>
            </div>
            <div className="form-group">
               <label for="Cake Type"><b>Cake type :-</b></label>
               <select name="CakeType" onChange={e => setCakeType(e.target.value)} className="form-control">
                                        <option value="" selected disabled>Select Type</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="farewell">Farewell</option>
                                    </select>
                <div className="text-danger">{error.CakeType}</div>
            </div>
            <div className="form-group">
            <label For="CakeEggless"><b>Eggless :- </b></label>
                   <input type="checkbox" id="CakeEggless"  name='CakeEggless' onChange={e => setCakeEggless(e.target.checked)} placeholder="Cake Eggless" className="form-control"/>
                              
              </div>
            <div className="form-group">
             <label for="CakeIgrediants"><b>Cake Igrediants :-</b></label>
              <input type="text"  name="CakeIgrediants" className="form-control" onChange={e =>setCakeIgrediants(e.target.value)} placeholder="Cake Igrediants"  id="CakeIgrediants" />
          <p><span><h6>Kindly seprate the Every Ingrediants with " , "</h6></span></p>
          <div className="text-danger">{error.CakeIgrediants}</div>  
          </div>
                
                <input type="submit" value="Add Cake" className="btn btn-success" />
      
      </form>
   </div>
  </div>
</div>
</>
    )


    
}


export default withRouter(AddCake)