import React from 'react';
import classes from './ModalIntro.module.css';

const ModalIntro = () => {
  return (
    <div className = {`${classes.modal} ${classes.hidden}`}>
      <Title />
      <IntroText />
      <StartButton />
    </div>
  )
}

const Title = () => {
  return (
    <h1 className = {classes.title}>Speakit</h1>
  )
}

const IntroText = () => {
  return (
    <p className ={classes.text}>
      Click on the words to hear them sound.<br />
      Click on the button and speak the words into the microphone.
    </p>
  )
}
  
const StartButton = () => {
  return (
    <button className = {classes.start}>
      Start
    </button>
  )
}

  export default ModalIntro;