import React from 'react';
import classes from './ModalIntro.module.css';

const ModalIntro = () => {
  return (
    <div className = {classes.modal-intro}>
      <Title />
      <IntroText />
      <StartButton />
    </div>
  )
}

const Title = () => {
  return (
    <h1 className = {classes.intro-title}>Speakit</h1>
  )
}

const IntroText = () => {
  return (
    <p className ={classes.intro-text}>
      Click on the words to hear them sound.<br />
      Click on the button and speak the words into the microphone.
    </p>
  )
}
  
const StartButton = () => {
  return (
    <button className = {classes.button-start}>
      Start
    </button>
  )
}

  export default ModalIntro;