import React, { useEffect, useState } from 'react';
import { McqQuestions } from './QuestionsData';

const Mcqs = ({ setMcqResult, setNextCall }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [error, setError] = useState(null);
  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  useEffect(() => {
    let newScore = 0;
    McqQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.Answer) {
        newScore += 1;
      }
    });
    setMcqResult({ mcqScore: newScore });
  }, [selectedAnswers, setMcqResult]);

  const handleNextClick = () => {
    if (Object.keys(selectedAnswers).length === McqQuestions.length) {
      setNextCall(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className='flex flex-col w-[100%] lg:w-[80%] mx-auto shadow-md pt-6 pb-12 px-4 lg:px-10 max-h-full lg:max-h-[84.8vh] lg:overflow-y-scroll'>
        <h3 className='text-[1.3rem] font-[600] text-red-two mb-6' >Answer all the MCQ's given below.</h3>
        {
            McqQuestions.map((question, index) => (
            <div key={index} className='mb-[20px] '>
                <label className='text-[1.1rem] font-[600] tracking-wide'>{`${index + 1})  ${question.Question}`}</label>
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
                    <label className='ml-3' htmlFor={`question-${index}-option-${i}`}>{option}</label>
                    </li>
                ))}
                </ul>
            </div>
            ))
        }
        {
          error && <h3 className='text-[1.3rem] font-[400] text-red-two' >Answer all questions !!!</h3>
        }
        <button className='text-[1.1rem]  text-[#f7f7f7] font-normal px-8 py-2 rounded-[50px] w-fit mt-4 mx-auto tracking-wide bg-red-one' onClick={handleNextClick}>
            MCQ's Done
        </button>
        
    </div>
  );
};

export default Mcqs;
