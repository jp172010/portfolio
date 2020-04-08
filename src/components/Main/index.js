import React from 'react';
import ProfPic from './Profile.jpg'
import contact from './contact.png'
import './main.css'
import { Typography } from '@material-ui/core';
import Slideshow from "./Slideshow";

function Main() {
    
    return (
        <div id='parent'>
        <div id='main'>
            <div className='profPic'>
                <img
                    src={ProfPic}
                    alt="My Family"
                    style={{width: '400px', height: '400px'}}
                />
            </div>
            <br/>
            <Typography variant='h3' className='mText'>
                A Little About Me!
            </Typography>
            <br/>
            <Typography variant='h6' className='mText'>
                I have been programming for a little over 1 year. Most of my time I
          spend building in Javascript, using the React Framework. I also have
          experience with HTML5, CSS3, Java, MongoDB, and SQL.
            </Typography>
        </div>
        <br/>
        <br/>
        <div id="secHalf">
        <Typography variant='h4' className="mTitle">
            <a className='mTitle' href='/contact'>Get In Touch!</a>
        </Typography>
        <a href='/contact'>
        <img
            src={contact}
            alt="My Family"
            style={{width: '200px', height: '200px'}}
        />
        </a>
        <Typography variant='h4' className="mTitle">
            <a className='mTitle' href='/portfolio'>Check Out My Recent Projects!</a>
        </Typography>
        <a href='/portfolio' id="slideshow">
        <Slideshow/>
        </a>
        </div>
        </div>
    )
}

export default Main;