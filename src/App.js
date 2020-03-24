import React from 'react';
import './App.css';
import Info from './components/info';
import JobPreference from './components/job_preference';
import Work from './components/work';
import Project from './components/project';
import Edu from './components/edu';
import Summary from './components/summary';

function App() {
  return (
    <div className="App">
      <div className="a4">
        <Info />
        <JobPreference />
        <Work />
        <Project />
        <Edu />
        <Summary />
      </div>
    </div>
  );
}

export default App;
