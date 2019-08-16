import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./slideshow.css"
import DBZ from './images/DBZ.jpg'
import Gif from './images/gif.jpg'
import Click from './images/clickgame.png'
import Train from './images/train.jpg'
import Trivia from './images/trivia.jpg'

const Slideshow = () => {

  const slideImages = [
    DBZ,
    Gif,
    Click,
    Train,
    Trivia
  ];
   
  const properties = {
    duration: 1500,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
          </div>
        </div>
      </Slide>
    )
}

export default Slideshow;