import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Home';
import Test from './Test/Test';

const AppContent = () => {
  const location = useLocation();
  const [testCandidate, setTestCandidate] = useState(null)
  return (
    <>
      {/* Only display Header if the current path is not '/' */}
      {location.pathname !== '/' && <Header />}

      <Routes>
        <Route path='/' element={<Home setCandidate= {setTestCandidate}/>} />
        <Route path='/whmis-quiz/' element={<Test user={testCandidate} />} />
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
