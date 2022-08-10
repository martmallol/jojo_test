import React from 'react'
import banner from '../../img/jojos.jpg'
import './Home.css'

function Home() {
  return (
    <section className='banner'>
      <img src={ banner } width='900'/>
      <div className='title'>
        <h1>Which JoJo's character are you?</h1>
      </div>
      <div className='game-explanation'>
        <p>Game explanation... bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla. </p>
      </div>
      <a className='button' href='/quiz'><span>Play now!</span></a>
    </section>
  )
}

export default Home;
