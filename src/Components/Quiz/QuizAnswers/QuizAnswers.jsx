import './QuizAnswers.css';
import questions from '../../../utils/questions';

const QuizAnswers = ({ actualQuestion, setActualAnswer }) => {
  return (
    <div className='answers'>
      {questions[actualQuestion].options.map((answer) => (
        <button onClick={() => {setActualAnswer(answer.id);}}> {answer.textAnswer}</button>
      ))}
    </div>
  );
}

export default QuizAnswers;