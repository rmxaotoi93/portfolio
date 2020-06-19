import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import logo from './Games.png';
import weather from './weather-app.png'
import movie from './movie.png'
import itviec from './itviec.png'
export class Project extends Component {
    render() {
        return (
            <div id="section3">
                <h1>Project</h1>
                <div className="bar" style={{marginBottom:30,marginTop:-20}}></div>
                <Carousel>
  <Carousel.Item>
    <img
    
      alt="321"
      className="d-block w-100"
      src={logo}
      alt="First slide"
      height="508"
    />
    <Carousel.Caption>
    <a href="https://github.com/rmxaotoi93/canvas-game" style={{marginRight:30}}>Github</a>
    <a href="https://angry-heyrovsky-1e1908.netlify.app/">Demo</a>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      alt="321"
      className="d-block w-100"
      src={weather}
        alt="Third slide"
        height="508"
    />

    <Carousel.Caption>
    <a href="https://github.com/rmxaotoi93/weather-app" style={{marginRight:30}}>Github</a>
    <a href="https://loving-yonath-24fb58.netlify.app/">Demo</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      alt="321"
      className="d-block w-100"
      src={movie}
            alt="Third slide"
            height="508"
    />

    <Carousel.Caption>
      <a href="https://github.com/rmxaotoi93/imdb" style={{marginRight:30}}>Github</a>
      <a href="https://vigilant-kirch-602b04.netlify.app/">Demo</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      alt="321"
      className="d-block w-100"
      src={itviec}
            alt="Third slide"
            height="508"
    />

    <Carousel.Caption>
      <a href="https://github.com/rmxaotoi93/itviec" style={{marginRight:30}}>Github</a>
      <a href="https://itviec-47b97c.netlify.app/">Demo</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      alt="321"
      className="d-block w-100"
      src={itviec}
            alt="Third slide"
            height="508"
    />

    <Carousel.Caption>
      <a href="https://github.com/NgoTheHieu/Twitter" style={{marginRight:30}}>Github</a>
      <a href="https://twitterapp.netlify.app/">Demo</a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </div>
        )
    }
}

export default Project
