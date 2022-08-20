import React from 'react'
import './MyJojo.css'
import jolyneee from '../../img/jolyne.jpg'
import charactersInfo from '../../characters-info/characters'

function MyJojo({ response }) {
  const yourJojo = Object.keys(response).reduce((a, b) => response[a] > response[b] ? a : b);

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
            <div className='description'>
              <h2>{charactersInfo[yourJojo].name}</h2>
              <p>{charactersInfo[yourJojo].description}</p>
            </div>
                      
            <div className='submit'>
              <h3>Upload your result!</h3>
              <div className='form'>
                <span>Your name:</span> 
                <input></input>
                <a className='button'><span>Load</span></a>
              </div>
            </div>

            <div className='share'>
              <a className='button' onClick={window.location.href} href='./quiz'><span>Play Again</span></a>
              <a className='button'><span>Share</span></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MyJojo