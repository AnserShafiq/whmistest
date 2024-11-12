import React, { useEffect, useState } from 'react';
import Mcqs from './Questions/Mcqs';
import Pictograms from './Questions/Pictograms';
import Logo from '../Images/Logo3.png'
const ThanksMsg = () => {
  return(
    <div className='flex flex-col w-[94%] lg:w-[100%] mx-auto h-[84vh] justify-center items-center'>
      <img className='w-[15rem] mb-4' src={Logo} alt='WHMIS Test By Unique Employment Solutions' />
      <h2 className='text-[2rem] capitalize font-semibold tracking-wider text-center leading-tight'>
          Thank you for giving the test,<br className='hidden lg:block'/> we'll reach back to you shortly.
      </h2>
  </div>
  )
}

const Test = ({ user }) => {
  const [mcqsScore, setMcqsScore] = useState(0);
  const [pictogramScore, setPictogramScore] = useState(0);
  const [next, setNext] = useState(false);
  const [testDone, setTestDone] = useState(false);
  
  const CandidateData = {
    Name: user.name,
    Email: user.email,
    McqsScore: mcqsScore.mcqScore,
    PictogramsScore: pictogramScore.pictScore,
    ScorePercentage: (((mcqsScore.mcqScore+pictogramScore.pictScore)/19)*100).toFixed(2),
  }

  useEffect(() => {
    if(next){
      window.scrollTo({
        top:0,
        behaviour: 'smooth',
      })
    }
    if(testDone){
      console.log(CandidateData)
    }
    
  })

  return (
    <div>
      {testDone ? (
        <ThanksMsg />
      ) : (
        next ? (
          <Pictograms setPictogramsResult={setPictogramScore} quizDone={setTestDone} />
        ) : (
          <Mcqs setMcqResult={setMcqsScore} setNextCall={setNext} />
        )
      )}
    </div>
  );
};

export default Test;
