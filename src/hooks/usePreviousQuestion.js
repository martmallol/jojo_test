import { restartCharactersValues } from '../utils/characterUpdates';

const usePreviousQuestion = (
  actualAnswerHandler,
  characters,
  charactersHandler,
  answersHistory,
  answersHistoryHandler,
  actualQuestion,
  actualQuestionHandler,
  errorHandler
) => {
  const restorePreviousQuestionStates = (
    someUpdatedCharacters,
    aPreviousAnswersHistory,
    aPreviousQuestion
  ) => {
    if (someUpdatedCharacters !== characters) charactersHandler(someUpdatedCharacters);
    answersHistoryHandler(aPreviousAnswersHistory);
    actualQuestionHandler(aPreviousQuestion);
    actualAnswerHandler(-1);
    errorHandler(false);
  };

  const handlePreviousQuestion = () => {
    const previousAnswersHistory = answersHistory.slice(0, -1);
    const answerToDelete = answersHistory[answersHistory.length - 1];
    const previousQuestion = actualQuestion - 1;

    let updatedCharacters = characters;
    if (answerToDelete !== -1) {
      updatedCharacters = restartCharactersValues(characters, previousQuestion, answerToDelete);
    }

    restorePreviousQuestionStates(
      updatedCharacters,
      previousAnswersHistory,
      previousQuestion
    );
  };

  return handlePreviousQuestion;
};

export default usePreviousQuestion;
