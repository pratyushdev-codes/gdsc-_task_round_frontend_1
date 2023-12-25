import React, { Component } from 'react';

class Events extends Component {
  render() {
    return (
    <div>
     <h4 style={{ color: "#21524F", fontSize: "60px", fontWeight: "bold" }}>Events</h4>
   
      <br />
      <div className="d-flex flex-wrap justify-content-center">
        <div className="card mx-3 mb-3" style={{ maxWidth: '20rem', borderRadius: '15px', border: '1px solid grey'}}>
          <img
            src="https://www.mjvinnovation.com/wp-content/uploads/2021/07/Etapas-do-Data-Science-para-aplicar-na-sua-empresa.gif"
            className="card-img-top"
            alt="..."
            style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{color:"#21524F", fontWeight:"bold"}}>NetWarriors Challenge</h5>
            <p className="card-text">
              A networking competition where participants tackle real-world networking scenarios, troubleshoot issues, and optimize network configurations. This event can include hands-on labs, simulations, and team-based challenges.
            </p><br /><br /><br />
            <button type="button" className="btn btn-primary" data-mdb-ripple-color="dark" style={{borderRadius:"20px"}}>Register now</button>
          </div>
        </div>

        <div className="card mx-3 mb-3" style={{ maxWidth: '20rem', borderRadius: '15px', border: '1px solid grey'}}>
          <img
            src="https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif"
            className="card-img-top"
            alt="..."
            style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{color:"#21524F", fontWeight:"bold"}}>CodeXchange: Cisco Edition</h5>
            <p className="card-text">
              A coding and development competition focused on creating innovative solutions using Cisco APIs and platforms. Participants can develop applications, scripts, or automation tools that leverage Cisco technologies.
            </p><br /><br /><br /><br />
            <button type="button" className="btn btn-primary" data-mdb-ripple-color="dark" style={{borderRadius:"20px"}}>Register now</button>
          </div>
        </div>

        <div className="card mx-3 mb-3" style={{ maxWidth: '20rem', borderRadius: '15px', border: '1px solid grey' }}>
          <img
            src="https://i.pinimg.com/originals/fc/71/63/fc71635c7f1b09ed30413f59bb749582.gif"
            className="card-img-top"
            alt="..."
            style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{color:"#21524F", fontWeight:"bold"}}>CyberSafeguard: Cisco Security Symposium</h5>
            <p className="card-text" >A symposium dedicated to cybersecurity, focusing on Cisco's security solutions. This event can include talks, workshops, and demonstrations on topics like threat intelligence, network security, and secure access solutions.</p><br /><br />
            <button type="button" className="btn btn-primary" data-mdb-ripple-color="dark" style={{borderRadius:"20px"}}>Register now</button>
          </div>
        </div>

        <div className="card mx-3 mb-3" style={{ maxWidth: '20rem', borderRadius: '15px', border: '1px solid grey'}}>
          <img
            src="https://gifdb.com/images/high/coding-animated-laptop-flow-stream-ja04010rm5o68zfk.gif"
            className="card-img-top"
            alt="..."
            style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{color:"#21524F", fontWeight:"bold"}}>IoT Innovate-a-thon: Powered by Cisco</h5>
            <p className="card-text">A hackathon centered around the Internet of Things (IoT), where participants work on projects that incorporate Cisco's IoT technologies and platforms. This event can involve building smart applications, IoT devices, or solutions for specific industries.</p><br />
            <button type="button" className="btn btn-primary" data-mdb-ripple-color="dark" style={{borderRadius:"20px"}}>Register now</button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
}

export default Events;
