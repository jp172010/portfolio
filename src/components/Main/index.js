import React from 'react';
import ProfPic from './Profile.jpg'
import contact from './contact.png'
import './main.css'
import { Typography } from '@material-ui/core';
import Slideshow from "./Slideshow";

function Main() {
    return (
        <div>
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
                I grew up in Northern California and moved to Austin, Tx in 2010.
                I'm currently employed at Golds Gym as a Personal Trainer. I'm
                working to transition from being a full-time trainer, to a
                part-time trainer / full-time programmer by attending the UT
                Coding Bootcamp. I'm working to become a Web Designer / Full-Stack
                programmer.
            </Typography>
        </div>
        <br/>
        <br/>
        <div id="secHalf">
        <Typography variant='h5' className="mTitle">
            Get In Touch!
        </Typography>
        <a href='/contact'>
        <img
            src={contact}
            alt="My Family"
            style={{width: '200px', height: '200px'}}
        />
        </a>
        <Typography variant='h5' className="mTitle">
            Check Out My Recent Projects!
        </Typography>
        <a href='/portfolio' id="slideshow">
        <Slideshow/>
        </a>
        </div>
        </div>
    )
}

export default Main;