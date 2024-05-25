import { addCharactersValues } from '../utils/characterUpdates';

const useNextQuestion = (
  actualAnswer,
  actualAnswerHandler,
  characters,
  charactersHandler,
  answersHistory,
  answersHistoryHandler,
  actualQuestion,
  actualQuestionHandler,
  errorHandler
) => {
  const updateNextQuestionStates = (
    someUpdatedCharacters,
    aNextAnswersHistory,
    aNextQuestion
  ) => {
    charactersHandler(someUpdatedCharacters);
    answersHistoryHandler(aNextAnswersHistory);
    actualQuestionHandler(aNextQuestion);
    actualAnswerHandler(-1);
  };

  const handleNextQuestion = () => {
    if (actualAnswer === -1) {
      errorHandler(true);
      return;
    }

    const nextAnswersHistory = [...answersHistory, actualAnswer];
    const nextQuestion = actualQuestion + 1;
    const updatedCharacters = addCharactersValues(characters, actualQuestion, actualAnswer);

    updateNextQuestionStates(updatedCharacters, nextAnswersHistory, nextQuestion);
  };

  return handleNextQuestion;
};

export default useNextQuestion;
