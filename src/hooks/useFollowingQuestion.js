import { restartCharactersValues, addCharactersValues } from '../utils/characterUpdates';

const useFollowingQuestion = (
  actualQuestion,
  actualQuestionHandler,
  characters,
  charactersHandler,
  answersHistory,
  answersHistoryHandler
) => {
  const quizButtonStateUpdate = (
    characterUpdate,
    newAnswerHistory,
    newQuestion,
    actualAnswer
  ) => {
    if (answersHistory) {
      characterUpdate(
        characters,
        charactersHandler,
        actualQuestion,
        answersHistory,
        actualAnswer
      );
    }
    answersHistoryHandler(newAnswerHistory);
    actualQuestionHandler(newQuestion);
  };

  const nextOrBackStateUpdate = (
    buttonPressed,
    answersHistory,
    actualAnswer,
    actualAnswerHandler,
    actualQuestion,
    errorHandler
  ) => {
    if (buttonPressed === 'next') {
      quizButtonStateUpdate(
        addCharactersValues,
        [...answersHistory, actualAnswer],
        actualQuestion + 1,
        actualAnswer);
    } else {
      quizButtonStateUpdate(
        restartCharactersValues,
        answersHistory.slice(0, -1),
        actualQuestion - 1,
        actualAnswer);
    }

    actualAnswerHandler(-1);
    errorHandler(false);
  };

  return nextOrBackStateUpdate;
};

export default useFollowingQuestion;
