import { useNavigate } from 'react-router-dom';

const useGameFinish = (
  nextQuestionHandler
) => {
  const navigation = useNavigate();

  const handleGameFinish = () => {
    nextQuestionHandler();
    navigation('/get-my-jojo');
  };

  return handleGameFinish;
};

export default useGameFinish;
