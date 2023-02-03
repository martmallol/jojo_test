import React from 'react'
import banner from '../../img/jojos.jpg'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className='banner'>
      <img src={ banner } width='900'/>
      <div className='title'>
        <h1>Which JoJo's character are you?</h1>
      </div>
      <div className='game-explanation'>
        <p><strong>Jojo's Bizarre Adventure</strong> is an <em>extravagant</em> and <em>thrilling</em> anime series that has a solid fanbase all around the globe.
          It's very common to identify with its multiple heroes. Actually, this brings out a crucial question: </p>
        <p><em>Have you ever wondered which JoJo's character matches your personality? 
          Doesn't that make you curious?</em></p>
        <p><strong>Start this test and find it out!</strong></p>
      </div>
      <Link to='/quiz' className='button'><span>Play now!</span></Link>
    </section>
  )
}

export default Home;
