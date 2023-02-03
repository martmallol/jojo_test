import React from 'react';
import './MyJojo.css';
import jolyneee from '../../img/jolyne.jpg';
import charactersInfo from '../../characters-info/characters';
import { Link } from 'react-router-dom';

function MyJojo({ response }) {
  const yourJojo = Object.keys(response).reduce((a, b) => response[a] > response[b] ? a : b);

  const shareObject = {
    title: `I'm ${charactersInfo[yourJojo].name}_${charactersInfo[yourJojo].surname}!` ,
    text: 'Do you want to discover which JoJo are you? Check it out!',
    url: 'https://github.com/martmallol'
  };

  const shareAcross = () => {
    if (navigator.share) {
      navigator
        .share(shareObject)
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing', error));
    } else {
      console.log('Share not supported');
    }
  }

  return (
    <main className='MyJojo'>
      <div className='title'>
        <h1>You're...</h1>
      </div>
      <div className='body'>
        <div className='picture'>
          <img src={charactersInfo[yourJojo].image} />
          <a href={`https://jojo.fandom.com/wiki/${charactersInfo[yourJojo].name}_${charactersInfo[yourJojo].surname}`} >More info</a>
        </div>
        <div className='character-info'>
          <div className='hola'>
          <div className='card-box'>
            <div className='description'>
              <h2>{charactersInfo[yourJojo].name}</h2>
              <p>{charactersInfo[yourJojo].description}</p>
            </div>
                      
            <div className='submit'>
              <h3>Upload your result!</h3>
              <div className='form'>
                <span>Your name:</span> 
                <input></input>
                <a className='button1' ><span>Load</span></a>
              </div>
            </div>

            <div className='share'>
            <Link to='/quiz' className='button1' onClick={window.location.href}><span>Play Again</span></Link>
              <a className='button1' onClick={() => shareAcross()}><span>Share</span></a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MyJojo