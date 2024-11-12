import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Home';
import Test from './Test/Test';

const AppContent = () => {
  const location = useLocation();
  const [testCandidate, setTestCandidate] = useState(null)

  useEffect(()=>{
    if(testCandidate ===null && location.pathname !== '/whmis-quiz/'){
      window.location.href = '/whmis-quiz/'
    }
  })

  return (
    <>
      {location.pathname !== '/whmis-quiz/' && <Header />}

      <Routes>
        <Route path='/whmis-quiz/' element={<Home setCandidate= {setTestCandidate}/>} />
        <Route path='/whmis-quiz/quiz/' element={<Test user={testCandidate} />} />
        {/* Add more routes here as needed */}
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
