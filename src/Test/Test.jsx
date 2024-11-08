import React, { useState } from 'react';
import Mcqs from './Questions/Mcqs';
import Pictograms from './Questions/Pictograms';

const Test = ({ user }) => {
  const [mcqsScore, setMcqsScore] = useState(null);
  const [pictogramScore, setPictogramScore] = useState(null);
  const [next, setNext] = useState(false);
  const [testDone, setTestDone] = useState(false);
  
  console.log(user, mcqsScore, pictogramScore);

  return (
    <div>
      {testDone ? (
        <div>Thank you for taking the test.</div>
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
