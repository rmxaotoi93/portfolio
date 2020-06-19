import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap';
export class Skills extends Component {
    render() {
        return (
            <div id="section2">
                   <h1>SKILLS</h1>
              <Container>
                  <Row>
                      <Col>
                   
                <div className="bar"></div>
                <h3>PROGRAMMING LANGUAGE </h3>
                
               <div className="skills">
               <img src="https://img.icons8.com/color/96/000000/html-5.png" alt="HTML5" className="img-fluid"></img>
                 <img src="https://img.icons8.com/color/96/000000/css3.png" alt="CSS" className="img-fluid"></img>
                 <img src="https://img.icons8.com/color/96/000000/javascript.png" alt="JavaScript"></img>
                 <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="Bootstrap" className="img-fluid"></img>
                 <img src="https://img.icons8.com/color/96/000000/git.png" alt="Git" className="img-fluid"></img>
                 <img src="https://img.icons8.com/plasticine/96/000000/react.png" alt="Reactjs" className="img-fluid"></img>
               </div>
                      </Col>
                  </Row>
              </Container>
           
            </div>
        )
    }
}

export default Skills
