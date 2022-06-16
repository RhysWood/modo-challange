import React from "react";
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login() {

    

    return(
        <div className="parent">
        <div className="child">
        <form>
        <div className="input-section">
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
      </form>
      </div>
        </div>
    )
}