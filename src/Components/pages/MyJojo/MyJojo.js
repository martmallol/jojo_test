import React from 'react';
import './MyJojo.css';
import useMyJojo from '../../../hooks/useMyJojo.js'
import {charactersInfo} from '../../../utils/characters.js';
import CharacterInfoCard from '../../CharacterInfoCard/CharacterInfoCard.js';

function MyJojo({ response }) {
  const { yourJojo, shareAcross } = useMyJojo(response);
  
  return (
    <main className='MyJojo'>
      <div className='title'>
        <h1>You're...</h1>
      </div>
      <div className='body'>
        <div className='picture'>
          <img src={charactersInfo[yourJojo].image} />
          <a href={`https://jojo.fandom.com/wiki/${charactersInfo[yourJojo].name}_${charactersInfo[yourJojo].surname}`}> More info</a>
        </div>
        <CharacterInfoCard 
          chosenJojo={charactersInfo[yourJojo]}
          shareAcross={shareAcross} />
      </div>
    </main>
  )
}

export default MyJojo