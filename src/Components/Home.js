import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className='main'>
      <div className='text'>
        <h2 style={{ color: "#21524F", fontSize: "60px", fontWeight: "bold" }}>Unlock your</h2>
        <p style={{ fontSize: "20px", fontWeight: "" }}>true Potential with <strong>GDSC  VIT Bhopal</strong> </p>
        <br />
        <br />
        <button type="button" className="btn btn" style={{ backgroundColor: "#21524F", borderRadius: "20px", color: "white" }}> Explore More <img src="./images/Arrows.gif" style={{ height: "50px", width: "50px" }} /></button>
        <div>
          <br/>
          <span className="fa fa-star checked"></span>&nbsp;
          <span className="fa fa-star checked"></span>&nbsp;
          <span className="fa fa-star checked"></span>&nbsp;
          <span className="fa fa-star"></span>&nbsp;
          <span className="fa fa-star"></span>
          <br/>
        </div>
      </div>

      <div className='images'>
        <div>
          <img src="https://cdn.dribbble.com/users/1124806/screenshots/4876982/ezgif.com-optimize.gif" style={{ marginTop: "50px" }} />
       
        </div>
        <div className='image-container' >
          <img src="https://www.aceinfoway.com/blog/wp-content/uploads/2020/10/react-native.gif" style={{ scale: "5", marginTop: "110px" }} />
         
        </div>
        <div className='image-container'>
          <img src="https://www.vkreate.in/storage/services_image/2019-10-01-13-58-44-5d935b94dd6b5-app-development.gif" style={{ scale: "2", marginTop: "120px" }} />
         
        </div>
      </div>
    </div>
  );
}

export default Home;
