/*
=========================================================
* Coded by Reagan Johnston
=========================================================
*/

import React from "react";

const imgStyle = {
  width: '100vw',
  height: '30vw',
}

function About(){
  return(
    <>
    <div className="bodyFrameworks"
      style={imgStyle}>
      <div className="card-description-header">
        <h3>ABOUT ME</h3>
      </div>
      <div className="card-description-body">
        <h4> I was never the best at school or academics, I'm just a super curious guy. This website exists to share and motivate me to continue
              developing my ideas. As it documents my projects and challenges, I hope in the near future I would have more abstract knowledge to continue
              creating crazier projects. A recent interest of mine was cyber-securiy. Cryptography, enumeration, Privilege Escalation and Pen-testing are all very interesting apsects
              to research into. Continuing foward I can't wait to delve deaper, and apply my knowledge for further projects. 
        </h4>
      </div>
      <div className="row-listPanel">
        <div class="col-lg">
          <h5> Software Development</h5>
          <ul>
            <li>Front end development. Animated, styled and appropriated based on target audiences</li>
            <li>MVP testing utilising prototyping frameworks</li>
            <li>Java/mySQL server-side logic, automation</li>
            <li>GUI builds; Java, C, ReactJS</li>
          </ul>
        </div>

        <div class="col-lg">
          <h5> Cyber Security</h5>
          <ul>
            <li>Offensive Pentesting: nmap, ncat, metasploit, Hydra</li>
            <li>Basic Privilege Escalation</li>
            <li>Pentesting, encapsulation and metasploiting on reaganjohnston.com</li>
          </ul>
        </div>

        <div class="col-lg">
          <h5> Electronics</h5>
          <ul>
            <li>Retro-based Raspberri Pi emulators</li>
            <li>Teensy controller interfaces</li>
            <li>Automated printing modules. Created methods for more than one user to upload documents onto a server and print the documents anywhere.</li>
          </ul>
        </div>

      </div>
    </div>   
    </>
  );
}

export default About;