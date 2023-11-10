import { charactersInfo } from '../utils/characters';

const useMyJojo = (chosenCharacter) => {
  const yourJojo = Object.keys(chosenCharacter).reduce((a, b) => 
    chosenCharacter[a] > chosenCharacter[b] ? a : b
  );

  const shareObject = {
    title: `${charactersInfo[yourJojo].name} ${charactersInfo[yourJojo].surname}!`,
    text: `I'm ${charactersInfo[yourJojo].name} ${charactersInfo[yourJojo].surname}! Do you want to discover which JoJo are you? Check it out!`,
    url: 'https://martmallol.github.io/jojos-quiz-game'
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
  };

  return {
    yourJojo,
    shareAcross
  }
};

export default useMyJojo;