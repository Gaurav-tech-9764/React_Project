import {Link} from "react-router-dom"


function NullResult() {
    var style1={display: "flex",  backgroundColor:" DodgerBlue",justifyContent: "center",alignItems: "center"}

    return(
        <div className="col-md-12">
       <div className="container" style={{marginTop: "100px"}}>
            <h1>Requested Page Not Found!</h1>
            <Link to="/"><button className="btn btn-primary">Home</button></Link>
        </div>
        </div>


    )
    
}

export default NullResult