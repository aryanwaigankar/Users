import React, { useState} from 'react'
import { Outlet, Link } from "react-router-dom";


export default function Form() {
  return (
    <>
    <div className="container my-5 d-flex justify-content-center">
    <form class="needs-validation" novalidate>
        <div class="form-row row">
            <div class="form-group form-group-lg col-12 col-sm-6" >
            <label for="firstName" class="col-form-label">First Name</label>
            <input type="text" class="form-control form-control-lg" id="firstName" placeholder="First Name" style={{borderColor: "rgb(255 140 0)"}} required/>
            <div class="invalid-feedback">
            Please provide a valid city.
            </div>
            {/* <p>Please enter a First Name</p> */}
            </div>
            <div class="form-group form-group-lg col-12 col-sm-6 ">
            <label for="lastName" class="col-form-label">Last Name</label>
            <input type="text" class="form-control form-control-lg" id="lastName" placeholder="Last Name" style={{borderColor: "rgb(255 140 0)"}}/>
            </div>
        </div>
        <div class="form-row row">
            <div class="form-group form-group-lg col-12 col-sm-6">
            <label for="inputEmail" class="col-form-label">Email</label>
            <input type="email" class="form-control form-control-lg" id="inputEmail4" placeholder="Email" style={{borderColor: "rgb(255 140 0)"}}/>
            </div>
            <div class="form-group form-group-lg col-12 col-sm-6">
            <label for="inputPassword" class="col-form-label">Password</label>
            <input type="password" class="form-control form-control-lg" id="inputPassword4" placeholder="Password" style={{borderColor: "rgb(255 140 0)"}}/>
            </div>
        </div>
        <div class="form-row row">
            <div class="form-group form-group-lg col-12 col-sm-6">
                <label for="contact" class="col-form-label">Contact No.</label>
                <input type="number" class="form-control form-control-lg" id="contact" placeholder="Contact No" style={{borderColor: "rgb(255 140 0)"}}/>
            </div>
            <div class="form-group form-group-lg col-12 col-sm-3">
            <label for="inputAge" class="col-form-label">Age</label>
            <input type="number" class="form-control form-control-lg" id="age" placeholder="Age" style={{borderColor: "rgb(255 140 0)"}}/>
            </div>
        </div>
        <div style={{textAlign: "center"}}><Link to="/"><button type="cancel" href="/" class="btn btn-secondary mx-2 my-4">Cancel</button></Link>
        <Link to="/"><button type="submit" class="btn btn-warning mx-2 my-4" style={{backgroundColor: "rgb(255 140 0)", color: "white"}}>Add user</button></Link>
        </div>

        </form>
    </div>
    <Outlet/>
    </>
  )
}
