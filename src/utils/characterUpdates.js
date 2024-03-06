import questions from '../data/questions';
export const updateCharacterValues = (
  characters,
  handleCharacters,
  actualQuestion,
  answerNumber,
  type
) => {
  const canUpdate = type === 'add' || answerNumber !== -1;
  if (canUpdate) {
    const questionIdx = type === 'add'
      ? actualQuestion
      : actualQuestion - 1;
    const answer = questions[questionIdx].options[answerNumber];
    const updatedCharacters = Object.keys(characters).reduce((acc, key) => {
      acc[key] = type === 'add'
        ? characters[key] + answer[key]
        : characters[key] - answer[key];
      return acc;
    }, {});

    handleCharacters(updatedCharacters);
  };
};

export const addCharactersValues = (
  characters,
  handleCharacters,
  actualQuestion,
  answersHistory,
  actualAnswer
) => {
  updateCharacterValues(
    characters,
    handleCharacters,
    actualQuestion,
    actualAnswer,
    'add');
};

export const restartCharactersValues = (
  characters,
  handleCharacters,
  actualQuestion,
  answersHistory,
  actualAnswer
) => {
  const answerNumberToDelete = answersHistory[answersHistory.length - 1];
  updateCharacterValues(
    characters,
    handleCharacters,
    actualQuestion,
    answerNumberToDelete,
    'restart');
};
