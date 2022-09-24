import React, { useState} from 'react'
import { Outlet, Link } from "react-router-dom";


export default function Edit() {
  return (
    <>
    <div className="container my-5 d-flex justify-content-center">
    <form class="needs-validation" novalidate>
        <div class="form-row row">
            <div class="form-group form-group-lg col-12 col-sm-6 my-1" >
            <label for="firstName" class="col-form-label">First Name</label>
            <input type="text" class="form-control form-control-lg" id="firstName"  style={{borderColor: "rgb(255 140 0)"}} required/>
            {/* <div>Please enter First Name</div> */}
            </div>
            <div class="form-group form-group-lg col-12 col-sm-6  my-1">
            <label for="lastName" class="col-form-label">Last Name</label>
            <input type="text" class="form-control form-control-lg" id="lastName"  style={{borderColor: "rgb(255 140 0)"}}/>
            {/* <div>Please enter Last Name</div> */}
            </div>
        </div>
        <div class="form-row row">
            <div class="form-group form-group-lg col-12 col-sm-6 my-1">
            <label for="inputEmail" class="col-form-label">Email</label>
            <input type="email" class="form-control form-control-lg" id="inputEmail4" style={{borderColor: "rgb(255 140 0)"}}/>
            </div>
            <div class="form-group form-group-lg col-12 col-sm-6 my-1">
                <label for="contact" class="col-form-label">Contact No.</label>
                <input type="number" class="form-control form-control-lg" id="contact" style={{borderColor: "rgb(255 140 0)"}}/>
            </div>
        </div>
        <div class="form-row row">
            
            <div class="form-group form-group-lg col-12 col-sm-3 my-1">
            <label for="inputAge" class="col-form-label">Age</label>
            <input type="number" class="form-control form-control-lg" id="age" style={{borderColor: "rgb(255 140 0)"}}/>
            </div>
        </div>
        <div style={{textAlign: "center"}}><Link to="/"><button type="cancel" href="/" class="btn btn-secondary mx-2 my-4">Cancel</button></Link>
        <Link to="/"><button type="submit" class="btn btn-warning mx-2 my-4" style={{backgroundColor: "rgb(255 140 0)", color: "white"}}>Update user</button></Link>
        </div>

        </form>
    </div>
    <Outlet/>
    </>
  )
}
