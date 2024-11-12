import React, { useEffect, useState } from 'react';
import Mcqs from './Questions/Mcqs';
import Pictograms from './Questions/Pictograms';
import Logo from '../Images/Logo3.png';
import emailjs from 'emailjs-com';

const ThanksMsg = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/'; // Redirect to home
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div className='flex flex-col w-[94%] lg:w-[100%] mx-auto h-[84vh] justify-center items-center'>
      <img className='w-[15rem] mb-4' src={Logo} alt='WHMIS Test By Unique Employment Solutions' />
      <h2 className='text-[2rem] capitalize font-semibold tracking-wider text-center leading-tight'>
        Thank you for giving the test,<br className='hidden lg:block' /> we'll reach back to you shortly.
      </h2>
    </div>
  );
};

const Test = ({ user }) => {
  const [mcqsScore, setMcqsScore] = useState(0);
  const [checkedMcqs, setCheckedMcqs] = useState([]);
  const [pictogramScore, setPictogramScore] = useState(0);
  const [checkedPicts, setCheckedPicts] = useState([]);
  const [next, setNext] = useState(false);
  const [testDone, setTestDone] = useState(false);

  useEffect(() =>{
    if (next) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [next])

  useEffect(() => {
    if (testDone) {
      // Check if all required data exists before accessing it
      const validMcqs = checkedMcqs.length >= 10;
      const validPicts = checkedPicts.length >= 9;
      console.log('===> ',checkedPicts)
      const CandidateData = {
        Name: user.name,
        McqsScore: mcqsScore.mcqScore,
        PictogramsScore: pictogramScore.pictScore,
        ScorePercentage: (((mcqsScore.mcqScore + pictogramScore.pictScore) / 19) * 100).toFixed(2),

        ...(validMcqs && {
          Mcq1_Q: checkedMcqs[0]?.Question,
          Mcq1_A: checkedMcqs[0]?.GivenAnswer,
          Mcq1_Check: checkedMcqs[0]?.Check,
          Mcq2_Q: checkedMcqs[1]?.Question,
          Mcq2_A: checkedMcqs[1]?.GivenAnswer,
          Mcq2_Check: checkedMcqs[1]?.Check,
          Mcq3_Q: checkedMcqs[2]?.Question,
          Mcq3_A: checkedMcqs[2]?.GivenAnswer,
          Mcq3_Check: checkedMcqs[2]?.Check,
          Mcq4_Q: checkedMcqs[3]?.Question,
          Mcq4_A: checkedMcqs[3]?.GivenAnswer,
          Mcq4_Check: checkedMcqs[3]?.Check,
          Mcq5_Q: checkedMcqs[4]?.Question,
          Mcq5_A: checkedMcqs[4]?.GivenAnswer,
          Mcq5_Check: checkedMcqs[4]?.Check,
          Mcq6_Q: checkedMcqs[5]?.Question,
          Mcq6_A: checkedMcqs[5]?.GivenAnswer,
          Mcq6_Check: checkedMcqs[5]?.Check,
          Mcq7_Q: checkedMcqs[6]?.Question,
          Mcq7_A: checkedMcqs[6]?.GivenAnswer,
          Mcq7_Check: checkedMcqs[6]?.Check,
          Mcq8_Q: checkedMcqs[7]?.Question,
          Mcq8_A: checkedMcqs[7]?.GivenAnswer,
          Mcq8_Check: checkedMcqs[7]?.Check,
          Mcq9_Q: checkedMcqs[8]?.Question,
          Mcq9_A: checkedMcqs[8]?.GivenAnswer,
          Mcq9_Check: checkedMcqs[8]?.Check,
          Mcq10_Q: checkedMcqs[9]?.Question,
          Mcq10_A: checkedMcqs[9]?.GivenAnswer,
          Mcq10_Check: checkedMcqs[9]?.Check,
        }),

        ...(validPicts && {
          Pict1_Q: checkedPicts[0]?.Name,
          Pict1_A: checkedPicts[0]?.GivenAnswer,
          Pict1_Check: checkedPicts[0]?.Check,
          Pict2_Q: checkedPicts[1]?.Name,
          Pict2_A: checkedPicts[1]?.GivenAnswer,
          Pict2_Check: checkedPicts[1]?.Check,
          Pict3_Q: checkedPicts[2]?.Name,
          Pict3_A: checkedPicts[2]?.GivenAnswer,
          Pict3_Check: checkedPicts[2]?.Check,
          Pict4_Q: checkedPicts[3]?.Name,
          Pict4_A: checkedPicts[3]?.GivenAnswer,
          Pict4_Check: checkedPicts[3]?.Check,
          Pict5_Q: checkedPicts[4]?.Name,
          Pict5_A: checkedPicts[4]?.GivenAnswer,
          Pict5_Check: checkedPicts[4]?.Check,
          Pict6_Q: checkedPicts[5]?.Name,
          Pict6_A: checkedPicts[5]?.GivenAnswer,
          Pict6_Check: checkedPicts[5]?.Check,
          Pict7_Q: checkedPicts[6]?.Name,
          Pict7_A: checkedPicts[6]?.GivenAnswer,
          Pict7_Check: checkedPicts[6]?.Check,
          Pict8_Q: checkedPicts[7]?.Name,
          Pict8_A: checkedPicts[7]?.GivenAnswer,
          Pict8_Check: checkedPicts[7]?.Check,
          Pict9_Q: checkedPicts[8]?.Name,
          Pict9_A: checkedPicts[8]?.GivenAnswer,
          Pict9_Check: checkedPicts[8]?.Check,
        }),
      };

      emailjs
        .send('test-mails', 'test_score_1', CandidateData, 'fU8jkz-5voXVQQMAj')
        .then(
          (response) => {
            console.log('Email Sent');
          },
          (error) => {
            console.log('Mail not sent');
          }
        );
    }
  }, [testDone, mcqsScore, pictogramScore, checkedMcqs, checkedPicts, user.name]);

  return (
    <div>
      {testDone ? (
        <ThanksMsg />
      ) : next ? (
        <Pictograms setPictogramsResult={setPictogramScore} getCheckedPicts={setCheckedPicts} quizDone={setTestDone} />
      ) : (
        <Mcqs setMcqResult={setMcqsScore} getCheckedMcqs={setCheckedMcqs} setNextCall={setNext} />
      )}
    </div>
  );
};

export default Test;
