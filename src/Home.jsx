import React, { useState } from 'react';
import Logo from './Images/Logo2.png';
import { useNavigate } from 'react-router-dom';

const Home = ({setCandidate}) => {
    const [name, setNameEntry] = useState('');
    const [email, setEmailEntry] = useState('');
    const navigate = useNavigate();


    const handleNameChange = (e) => setNameEntry(e.target.value);
    const handleEmailChange = (e) => setEmailEntry(e.target.value);
    const handleStartQuiz = (e) =>{
        e.preventDefault();
        if( name && email ){
            setCandidate({name,email})
            navigate('/whmis-quiz/')
        }else if( (name && !email) || (!name && email) || (!name && !email)){
            alert('Please enter all fields')
        }

    };

    return (
        <div className='flex flex-col w-[94%] lg:w-[100%] mx-auto h-[100vh] justify-center items-center'>
            <img className='w-[15rem] mb-4' src={Logo} alt='WHMIS Test By Unique Employment Solutions' />
            <h2 className='text-[2rem] capitalize font-semibold tracking-wider text-center leading-tight'>
                Welcome to WHMIS Quiz by <br className='hidden lg:block' /> <span className='text-red-one'>Unique Employment Solutions</span>
            </h2>
            <div className='flex flex-col mt-4 px-5 lg:px-10 py-5 rounded-[30px] shadow-md bg-[#00000011] w-[100%] lg:w-[500px] '>
                <h3 className='text-0.8rem text-red-two mb-4' >Enter the following details to start the WHMIS Quiz:</h3>
                <div className='flex flex-col mb-4'>
                    <label className='text-[1.1rem] font-[600] capitalize'>Full Name:</label>
                    <input className='text-[1.1rem] font-[300] bg-[#00000022] px-3 py-1 mt-[0.05em] text-red-one shadow-sm shadow-[#3d2525d7] rounded-md' placeholder='Enter your name...'  type='text' name='name' value={name} onChange={handleNameChange} required/>
                </div>
                <div className='flex flex-col mb-6'>
                    <label className='text-[1.1rem] font-[600] capitalize'>Email Address:</label>
                    <input className='text-[1.1rem] font-[300] bg-[#00000022] px-3 py-1 mt-[0.05em] text-red-one shadow-sm shadow-[#3d2525d7] rounded-md' placeholder='Enter your email...' type='email' name='email' value={email} onChange={handleEmailChange} required/>
                </div>
                <button className='px-4 py-2 text-[1.1rem] font-semibold text-red-one hover:text-[#f4f4f4] bg-[#630b0b2f] hover:bg-red-one w-fit mx-auto rounded-[50px] border-2 border-red-one'  type='button' onClick={handleStartQuiz}>
                    Let's Go For Test
                </button>
            </div>
        </div>
    );
};

export default Home;
