import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark " >
        <div className="container">
          <a href="/" className="navbar-brand" style={{ color: "black" }}>
            <img src='./images/GDSClogo.png' style={{ height: "60px", width: "295px" }} alt="Logo" />
            
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2"><a className="nav-link" style={{ color: "#3A635A", fontWeight:"bold" }}>Home</a></li>
              <li className="nav-item mx-2"><a className="nav-link" style={{ color: "#3A635A",fontWeight:"bold" }}>About Us</a></li>
              <li className="nav-item mx-2"><a className="nav-link" style={{ color: "#3A635A",fontWeight:"bold" }}>Team</a></li>
              <li className="nav-item mx-2"><a className="nav-link" style={{ color: "#3A635A",fontWeight:"bold" }}>Benefits</a></li>
           
            </ul>
            <div className="ms-auto">
              <button type="button" className="btn btn" style={{ backgroundColor: "#21524F",borderRadius: "20px", color: "white" }}> Apply to GDSC</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;