import React from 'react';
import './MyJojo.css';
import useMyJojo from '../../hooks/useMyJojo'
import charactersInfo from '../../characters-info/characters';
import CharacterInfoCard from '../CharacterInfo/CharacterInfoCard';

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