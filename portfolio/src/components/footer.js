/*
=========================================================
* Coded by Reagan Johnston
* Utilising Paper Kit React - v1.2.0 frameworks
=========================================================
*/

//for now I can't see the importance of having a footer. That is with the current design I have in mind.

import React from "react"
import { Row, COntainter } from "reactstrap"

function Footer(){
    return(
        <footer className = "footer-whole">
            <Container>
                <Row>
                    <nav className="footer-corr">
                        <ul>
                            <li>
                                <a href="https://google.com" target="_blank"> Reagan Johnston </a>
                            </li>
                        </ul>
                    </nav>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
