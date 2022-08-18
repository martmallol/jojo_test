import React from 'react'
import './MyJojo.css'
import jolyneee from '../../img/jolyne.jpg'

function MyJojo() {
  return (
    <main className='MyJojo'>
      <div className='title'>
        <h1>You're...</h1>
      </div>
      <div className='body'>
        <div className='picture'>
          <img src={jolyneee} />
        </div>
        <div className='character-info'>
          <div className='hola'>
            <div className='description'>
              <h2>Jolyne</h2>
              <p>You are protective, yet a harsh person. You would take any risks to save your friends, 
              you trust them completely. For that reason you may tend to be naive sometimes. 
              However, this attitude could bring you many dangerous situations.</p>
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
              <a className='button'><span>Play Again</span></a>
              <a className='button'><span>Share</span></a>
            </div>
          </div>
        </div>

      </div>

    </main>
  )
}

export default MyJojo