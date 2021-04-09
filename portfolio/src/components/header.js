/*
=========================================================
* Coded by Reagan Johnston
=========================================================
*/

import React, {useState, useEffect} from "react";
import background from "./../assets/img/trial-image5.jpg";
import Typist from 'react-typist';



const imgStyle = {
  width: '96.2vw',
  height: '48vw',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

function Header() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return(
    <>
    <div
      className="page-header"
      style={imgStyle}
      >
        <div className="header-title" id="home">
          <h1><i>Reagan Johnston</i></h1>
        </div>
        <div className="header-sub1">
          <li>
            {count ? (
              <Typist avgTypingDelay={50} on onTypingDone={() => setCount(0)}>
                <span>Software Developer.</span>
                <Typist.Backspace count={24} delay={1000}/>
                <span>Cyber Security Analyst.</span>
                <Typist.Backspace count={24} delay={1000}/>
                <span>Full Stack Developer.</span>
                <Typist.Backspace count={24} delay={1000}/>
              </Typist>
            ): ("")}
          </li>
        </div>
    </div>
    </>
  )
}

export default Header;