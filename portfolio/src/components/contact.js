/*
=========================================================
* Coded by Reagan Johnston
=========================================================
*/

import React from "react";

const imgStyle = {
  width: '99vw',
  height: '44vw',
}

function Contact(){
  return(
    <>
    <div className = "bodyContact contact" style={{imgStyle}}>
      <h3>Contact me</h3>
      <div className="professional">
        <h4>Professional</h4>
        <ul>
          <li>(+61) 04 8111 7717</li>
          <li>reaganjohnston.official@gmail.com</li>
        </ul>
      </div>

      <div className="social">
        <h4>Social Media</h4>
        <ul>
          <a className ="contact-insta"
            href="https://www.instagram.com/">Instagram</a>
          <a className="contact-Git"
            href="https://www.github.com" target="_blank">GitHub</a>
          <a className="contact-LinkedIn"
          href="https://linkedin.com">LinkedIn</a>
        </ul>
      </div>

      <div className="business">
        <h4>Business</h4>
        <ul>
          <a href="https://www.johnstonorganics.com">johnstonorganics.com</a>
          <li><button class="button"><span>Resume(HTML)</span></button></li>
        </ul>
      </div>
    </div>

    </>
  )
}

export default Contact;