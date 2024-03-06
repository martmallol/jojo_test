import { useNavigate } from 'react-router-dom';

const usePageHandling = (
  nextOrBackStateUpdate,
  answersHistory,
  actualAnswer,
  actualAnswerHandler,
  actualQuestion,
  errorHandler
) => {
  const handleNextPage = () => {
    console.log(actualAnswer);
    (actualAnswer !== -1)
      ? nextOrBackStateUpdate(
        'next',
        answersHistory,
        actualAnswer,
        actualAnswerHandler,
        actualQuestion,
        errorHandler
      )
      : errorHandler(true);
  };

  const handlePreviousPage = () => {
    nextOrBackStateUpdate(
      'back',
      answersHistory,
      actualAnswer,
      actualAnswerHandler,
      actualQuestion,
      errorHandler
    );
  };

  const navigation = useNavigate();
  const handleGameFinish = () => {
    if (actualAnswer !== -1) {
      nextOrBackStateUpdate(
        'next',
        answersHistory,
        actualAnswer,
        actualAnswerHandler,
        actualQuestion,
        errorHandler
      );
      navigation('/get-my-jojo');
    } else {
      errorHandler(true);
    };
  };

  return [
    handleNextPage,
    handlePreviousPage,
    handleGameFinish
  ];
};

export default usePageHandling;
