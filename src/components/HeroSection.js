import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>KNOW YOUR RIGHTS</h1>
      <p> Everyone has basic rights under the Indian Constitution and civil rights laws.</p>
      <p> Learn more here about what your rights are, how to exercise them,</p>
      <p> and what to do when your rights are violated.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          How To Use <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;