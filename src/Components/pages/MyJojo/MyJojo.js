import React from 'react';
import './MyJojo.css';
import useMyJojo from '../../../hooks/useMyJojo.js';
import charactersInfo from '../../../data/characters.js';
import CharacterInfoCard from '../../CharacterInfoCard/CharacterInfoCard.js';

// eslint-disable-next-line react/prop-types
const MyJojo = ({ characterLikeness }) => {
  const { yourJojo, shareAcross } = useMyJojo(characterLikeness);

  return (
    <main className='MyJojo'>
      <div className='title'>
        <h1>{'You\'re...'}</h1>
      </div>
      <div className='body'>
        <div className='picture'>
          <img src={charactersInfo[yourJojo].image} alt='My Jojo'/>
          <a href={`https://jojo.fandom.com/wiki/${charactersInfo[yourJojo].name}_${charactersInfo[yourJojo].surname}`} >More info</a>
        </div>
        <CharacterInfoCard
          chosenJojo={yourJojo}
          shareAcross={shareAcross}/>
      </div>
    </main>
  );
};
export default MyJojo;
