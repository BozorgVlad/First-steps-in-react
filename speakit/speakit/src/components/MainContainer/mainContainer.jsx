import React from 'react';
import ImageContainer from './ImagesContainer/imageContainer';
import classes from './mainContainer.module.css';



const MainContainer = () => {
  return (
    <div className ={classes.main_container}>
      <ImageContainer />
    </div>
  )
}

export default MainContainer;
