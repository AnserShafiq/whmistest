import React, { useEffect, useState } from 'react';
import { McqQuestions } from './QuestionsData';

const Mcqs = ({ setMcqResult, getCheckedMcqs, setNextCall }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [CheckedMcqs, setCheckedMcqs] = useState([]);
  const [CorrectCount, setCorrectCount] = useState(0);
  const [error, setError] = useState(false)

  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  useEffect(() => {
    let newScore = 0;
    setCheckedMcqs( McqQuestions.map((question, index) => {
      const isCorrect = selectedAnswers[index] === question.Answer;
      const result = {
        No: index + 1,
        Question: question.Question,
        CorrectAnswer: question.Answer,
        GivenAnswer: selectedAnswers[index],
        Check: isCorrect ? 'Correct' : 'Incorrect',
      };
      
      if (isCorrect) newScore += 1;
      return result;
    }));


    // setCheckedMcqs(updatedCheckedMcqs);
    setCorrectCount(newScore);
  }, [selectedAnswers]);

  const handleNextClick = () => {
    const selectedCount = Object.keys(selectedAnswers).length;
    if (selectedCount === 10) {
      setNextCall(true);
      setMcqResult({ mcqScore: CorrectCount });
      getCheckedMcqs(CheckedMcqs);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col w-[100%] lg:w-[80%] mx-auto shadow-md pt-6 pb-12 px-4 lg:px-10 max-h-full lg:max-h-[84.8vh] lg:overflow-y-scroll">
      <h3 className="text-[1.3rem] font-[600] text-red-two mb-6">
        Answer all the MCQ's given below.
      </h3>
      {McqQuestions.map((question, index) => (
        <div key={index} className="mb-[20px]">
          <label className="text-[1.1rem] font-[600] tracking-wide">{`${index + 1})  ${question.Question}`}</label>
          <ul>
            {question.Options.map((option, i) => (
              <li key={i}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                  id={`question-${index}-option-${i}`}
                />
                <label className="ml-3" htmlFor={`question-${index}-option-${i}`}>
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {
        error && <p className='text-[0.9rem] text-red-two font-400'>Answer all questions to move to next part.</p>
      }
      <button
        className="text-[1.1rem] text-[#f7f7f7] font-normal px-8 py-2 rounded-[50px] w-fit mt-4 mx-auto tracking-wide bg-red-one"
        onClick={handleNextClick}
      >
        MCQ's Done
      </button>
    </div>
  );
};

export default Mcqs;
