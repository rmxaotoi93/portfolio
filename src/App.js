import React from 'react';
import bear from '../src/components/Bear.jpg';
import './App.css';
import Navbarr from './components/Navbarr';
import { Container, Row, Col } from 'react-bootstrap'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';
function App() {
  return (
    <div className="App">

      <Navbarr />
      <div className="intro">
        <h1>Ti's Portfolio</h1>
        <h3 >Fullstack Web Developer</h3>
      </div>
      <div className="dot">
        <img src={bear} ></img>
      </div>


      <Container style={{ marginTop: 150 }}>
        <Row>
          <Col>
            <div id="section1">

              <h1>Education</h1>
              <div className="bar"></div>
              <div className="edu">
                <div className="title">
                  <h3>coderschool</h3>
                  <p>- HTML, CSS, and JavaScript.</p>
                  <p>- Frontend engineering in React.</p>

                </div>
                <div>

                  <h4>Mojave Class - May 2020</h4>
                </div>
              </div>



            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="section1">
              <h1 style={{marginTop:-100}}>Experience</h1>
              <div className="bar"></div>
              <div className="edu">
                <div className="title">
                  <h3>agriculture sector</h3>
                  <p>Experienced of trade seeds and supporting devices in agriculture field, that prevent illness and insect infestation for the plant during plant growth</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Skills />
          </Col>
        </Row>

        <Row>
          <Col>
            <Project />
          </Col>
        </Row>


      </Container>
      <div className="contact">
        <Row>
          <Col>
            <Contact />
          </Col>
        </Row>
      </div>
      
    </div>

  );
}


export default App;
