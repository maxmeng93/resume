import React from 'react';
import './App.css';
import Info from './components/info';
import JobPreference from './components/job_preference';

function App() {
  return (
    <div className="App">
      <div className="a4">
        <Info />
        <JobPreference />
      </div>
    </div>
  );
}

export default App;
