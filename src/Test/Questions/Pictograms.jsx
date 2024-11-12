import React, { useEffect, useState } from 'react';
import { pictograms as PQ } from './QuestionsData';

const Pictograms = ({ setPictogramsResult, getCheckedPicts, quizDone }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  // const [CorrectCount, setCorrectCount] = useState(0);
  const [CheckedPictograms, setCheckedPicts] = useState([])

  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };


 useEffect(() => {
  let newScore = 0
    
    setCheckedPicts( PQ.map((question, index) => {
      const isCorrect = selectedAnswers[index] === question.name;
      const result = {
        Name: question.name,
        GivenAnswer: selectedAnswers[index],
        Check: isCorrect ? 'Correct' : 'Incorrect',
      };
      
      if (isCorrect) newScore += 1;
      return result;
    }));
    setPictogramsResult({ pictScore: newScore});
 }, [ setCheckedPicts, setPictogramsResult,selectedAnswers])

  const handleQuizDone = (e) => {
    // console.log(e)
    e.preventDefault();
    
    console.log(CheckedPictograms)
    getCheckedPicts(CheckedPictograms)

    quizDone(true)

  }


  return (
    <div className='flex flex-col w-[100%] lg:w-[80%] mx-auto shadow-md pt-6 pb-12 px-4 lg:px-10 max-h-full lg:max-h-[84.8vh] lg:overflow-y-scroll'>
      <h3 className='text-[1.3rem] font-[600] text-red-two mb-6'>Guess the name of all pictograms.</h3>
      <div className='grid grid-cols-1 lg:flex lg:flex-row lg:justify-center lg:flex-wrap'>
        {PQ.map((question, index) => (
          <div key={index} className=''>
            <div className='flex flex-col justify-start items-start m-[20px] bg-[#0000000a] rounded-[30px] shadow-sm p-3'>
              <label className='text-[1.1rem] font-[600] tracking-wide ml-2 mt-1'>{`${index + 1})`}</label>
              <div className='flex flex-col items-center w-full py-6'>
                <img className='h-[130px] mb-8' src={question.iconSource} alt={`Pictogram Question# ${index + 1}`} />
                <select
                  className='h-fit my-auto p-3 rounded-xl bg-[#00000022]'
                  value={selectedAnswers[index] || 'Options....'}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                >
                  <option disabled>Options....</option>
                  <option value='Health Hazard'>Health Hazard</option>
                  <option value='Gas Cylinder'>Gas Cylinder</option>
                  <option value='Bio Hazardous Infectious Materials'>Bio Hazardous Infectious Materials</option>
                  <option value='Exclamation Mark'>Exclamation Mark</option>
                  <option value='Flame'>Flame</option>
                  <option value='Corrosion'>Corrosion</option>
                  <option value='Exploding Bomb'>Exploding Bomb</option>
                  <option value='Flame Over Circle'>Flame Over Circle</option>
                  <option value='Skull and Crossbones'>Skull and Crossbones</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className='text-[1.1rem] font-normal px-8 py-2 rounded-[50px] w-fit mt-4 mx-auto tracking-wide bg-red-one text-[#f7f7f7]'
        onClick={handleQuizDone}
      >
        Submit Test
      </button>
    </div>
  );
};

export default Pictograms;
