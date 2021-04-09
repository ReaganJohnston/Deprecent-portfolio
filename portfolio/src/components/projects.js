/*
=========================================================
* Coded by Reagan Johnston
=========================================================
*/

import React from "react";

const imgStyle = {
  width: '99.1vw',
  height: '44vw',
  backgroundColor: 'white'
}

function Projects(){
  return(
    <>
    <div className="bodyProjects"
      style={imgStyle}>
        <div class="currentProjects">
          <h3>A</h3>
          <div class="projectsHeader">
            <h4>Projects involved</h4>
          </div>
          <table class="table">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Language</th>
              </tr>
            <tbody>
              <tr>
                <td>reaganjohnston.com</td>
                <td>Fullstack website to visualise my current projects</td>
                <td>ReactJS, Express, Vercel (now), node.js, npm</td>
              </tr>

              <tr>
                <td>johnstonorganics.com</td>
                <td>Fullstack website for the purpose of showcasing the organic meat I'm selling on the side. For 
                  all intended purposes will become an e-commerce website later
                </td>
                <td>ReactJS, Express, Vercel (now), node.js, npm</td>
              </tr>

              <tr>
                <td>Raspberri Pi printing-hub</td>
                <td>Online server to upload documents from anywhere to print at a designated location</td>
                <td>Python, Google-workspace API</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="futureVentures">
          <div class="venturesTitle">
            <h4>Future Ventures</h4>
          </div>
          <div class="venturesContent">
            <ul>
              <li>Security and authentication for both websites (Basic Pen-testing)</li>
              <li>Stock market command line execution (Executing buy/sell orders in a command-like interface)</li>
              <li>Automated NASDEC/NYSE trading bot utilising machine learning principles</li>
              <li>Beautiful graphical algorithim sorter</li>
              <li>Upgrade johnstonorganics to an E-commerce website, upgrade its security to allow for interaction of confidential customer details</li>
              <li>Attain CompTia Certified Cyber-Security Professional certificate</li>
              <li>Embedded Systems (IoT)</li>
            </ul>
          </div>
        </div>
    </div>

    </>
  )
}


export default Projects;