import React, {useState} from 'react'

import { Outlet, Link } from "react-router-dom";
import data from "./mock-data.json"


export default function Main() {
  const [user, setuser] = useState(data)
  const modal = {
  display: 'none',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "90%",

  backgroundColor: "white",
  padding: "4rem",
  borderRadius: "5px",
  boxShadow: "0 3rem 5rem rgba(0, 0, 0, 0.3)",
  zIndex: "10",
  }
  const overlay = {
  display: 'none',
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(1px)",
  zIndex: "5",  
  }

  const openModal = function(){
    document.getElementById('modal').style.display = '';
    document.getElementById('overlay').style.display = '';
  }
  const closeModal = function(){
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

  }

  return (
    <>
    <Link to="/Form"><button type="button" className=" addUser btn my-4 mx-4" style={{backgroundColor: "rgb(255 140 0)", color: "white", float: "right"}}>Add user</button></Link>

    <table className="table table-bordered">
      <thead className="text-white text-center" style={{backgroundColor: "rgb(255 140 0)"}}>
        <tr>
          <th scope="col">Sr no.</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Age</th>
          <th scope="col">Email</th>
          <th scope="col">Contact No</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody className ="text-center">
        <tr>
          <th score="row">1</th>
          <th score="row">Aryan</th>
          <th score="row">Waigankar</th>
          <th score="row">20</th>
          <th score="row">aryanwaigankar10@gmail.com</th>
          <th score="row">1234567890</th>
          <th score="row"><Link to="/Edit"><button type="button" className="btn" style={{color: "rgb(255 140 0)"}}><i className="bi-pencil-square" ></i> Edit</button></Link></th>
          <th score="row"><button type="button" className="btn" onClick={openModal} style={{color: "rgb(255 140 0)"}}><i className="bi-trash"></i> Delete</button></th>
          
        </tr>
        {user.map((user)=>(
          <tr>
          <th scope="row">{user.sr}</th>
          <th scope="row">{user.firstName}</th>
          <th score="row">{user.lastName}</th>
          <th score="row">{user.age}</th>
          <th score="row">{user.email}</th>
          <th score="row">{user.contact}</th>
          <th score="row"><Link to="/Edit"><button type="button" className="btn" style={{color: "rgb(255 140 0)"}}><i className="bi-pencil-square" ></i> Edit</button></Link></th>
          <th score="row"><button type="button" className="btn" onClick={openModal} style={{color: "rgb(255 140 0)"}} ><i className="bi-trash"></i> Delete</button></th>
        </tr>
          ))}
        

      </tbody>
    </table>

    <div id="modal" style={modal}>
      <h4>You want to delete?</h4>
      <button type="button" className="btn my-2 mx-2" onClick={closeModal} style={{backgroundColor: "rgb(255 140 0)", color: "white"}}>Yes</button>
      <button type="button" className="btn my-2 mx-2" onClick={closeModal} style={{backgroundColor: "rgb(255 140 0)", color: "white"}}>No</button>
      <hr style={{color: "rgb(255 140 0)"}}/>

      <div className="container my-3 d-flex justify-content-center">
          
      <form className="needs-validation" novalidate>
          <div className="form-row row">
              <div className="form-group form-group-lg col-12 col-sm-6 my-1" >
              <label for="firstName" className="col-form-label">First Name</label>
              <input type="text" className="form-control form-control-lg" id="firstName" style={{borderColor: "rgb(255 140 0)"}} required/>
              {/* <div>Please enter First Name</div> */}
              </div>
              <div className="form-group form-group-lg col-12 col-sm-6  my-1">
              <label for="lastName" className="col-form-label">Last Name</label>
              <input type="text" className="form-control form-control-lg" id="lastName" style={{borderColor: "rgb(255 140 0)"}}/>
              {/* <div>Please enter Last Name</div> */}
              </div>
          </div>
          <div className="form-row row">
              <div className="form-group form-group-lg col-12 col-sm-6 my-1">
              <label for="inputEmail" className="col-form-label">Email</label>
              <input type="email" className="form-control form-control-lg" id="inputEmail4" style={{borderColor: "rgb(255 140 0)"}}/>
              </div>
              <div className="form-group form-group-lg col-12 col-sm-6 my-1">
                  <label for="contact" className="col-form-label">Contact No.</label>
                  <input type="number" className="form-control form-control-lg" id="contact" style={{borderColor: "rgb(255 140 0)"}}/>
              </div>
          </div>
          <div className="form-row row">
              
              <div className="form-group form-group-lg col-12 col-sm-3 my-1">
              <label for="inputAge" className="col-form-label">Age</label>
              <input type="number" className="form-control form-control-lg" id="age" style={{borderColor: "rgb(255 140 0)"}}/>
              </div>
          </div>
          </form>
      </div>
    </div>
    <div id="overlay" style={overlay}></div>

<Outlet/>
    </>
    

  )
}
