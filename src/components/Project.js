import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import logo from './Games.png';
import weather from './weather-app.png'
import movie from './movie.png'
export class Project extends Component {
    render() {
        return (
            <div id="section3">
                <h1>Project</h1>
                <div className="bar" style={{marginBottom:30,marginTop:-20}}></div>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="First slide"
      height="508"
    />
    <Carousel.Caption>
    <a href="https://vigilant-kirch-602b04.netlify.app/">Demo</a>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={weather}
        alt="Third slide"
        height="508"
    />

    <Carousel.Caption>
    <a href="https://vigilant-kirch-602b04.netlify.app/">Demo</a>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={movie}
            alt="Third slide"
            height="508"
    />

    <Carousel.Caption>
      <a href="https://vigilant-kirch-602b04.netlify.app/">Demo</a>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </div>
        )
    }
}

export default Project
