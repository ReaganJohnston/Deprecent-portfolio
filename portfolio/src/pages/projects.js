/*
=========================================================
* Coded by Reagan Johnston
=========================================================
*/

import React from "react";

const imgStyle = {
  width: '99vw',
  height: '30vw',
}

function Projects(){
  return(
    <>
    <div className="bodyProjects"
      style={imgStyle}>
        <div class="currentProjects">
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
                <td>ReactJS, Express, Vercel (Now), node.js, npm</td>
              </tr>

              <tr>
                <td>johnstonorganics.com</td>
                <td>Fullstack website for the purpose of showcasing the organic meat I'm selling on the side. For 
                  all intended purposes will become an e-commerce website later
                </td>
                <td>ReactJS, Express, Vercel (Now), node.js, npm</td>
              </tr>

              <tr>
                <td>Raspberri Pi printing-hub</td>
                <td>Online server to upload documents from anywhere for printing at a designated location</td>
                <td>Python, Google-workspace API</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    </>
  )
}


export default Projects;