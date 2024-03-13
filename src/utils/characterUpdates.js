import questions from '../data/questions';

export const updateCharactersValues = (
  someCharacters,
  aQuestionToReset,
  anAnswerToDelete,
  addOrRemove
) => {
  const answer = questions[aQuestionToReset].options[anAnswerToDelete];
  const updatedCharacters = Object.keys(someCharacters).reduce((acc, key) => {
    acc[key] = someCharacters[key] + answer[key] * addOrRemove;
    return acc;
  }, {});

  return updatedCharacters;
};

export const addCharactersValues = (
  someCharacters,
  anActualQuestion,
  anAnswerToAdd
) => {
  return updateCharactersValues(
    someCharacters,
    anActualQuestion,
    anAnswerToAdd,
    1
  );
};

export const restartCharactersValues = (
  someCharacters,
  aQuestionToReset,
  anAnswerToDelete
) => {
  return updateCharactersValues(
    someCharacters,
    aQuestionToReset,
    anAnswerToDelete,
    -1
  );
};
