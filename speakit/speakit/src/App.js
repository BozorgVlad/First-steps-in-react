import React from 'react';
import './App.css';
import ModalIntro from './components/ModalIntro/ModalIntro';
import MainContainer from './components/MainContainer/mainContainer';

const  App = () => {
  return (
    <div className = 'App'>
      <main className = 'main'>
        <ModalIntro />
        <MainContainer />
      </main>
    </div>
  );
}


export default App;
