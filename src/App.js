import './App.scss';

import PopUpScreen from './components/PopUpScreen/PopUpScreen';
import JobForm from './components/JobForm/JobForm'
import JobsContainer from './components/JobsContainer/JobsContainer'
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  return (
    <>
      <div className="job-form-wrapper-section">
        <JobForm setToDos={setToDos} toDos={toDos} />
        <JobsContainer setToDos={setToDos} toDos={toDos} />
        <PopUpScreen />
      </div>
    </>
  );
}

export default App;
