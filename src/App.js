import './App.scss';

import PopUpScreen from './components/PopUpScreen/PopUpScreen';
import JobForm from './components/JobForm/JobForm'
import JobsContainer from './components/JobsContainer/JobsContainer'
import { useState } from 'react';
import ToDoContext from './context/ToDoContext';

function App() {
  const [toDos, setToDos] = useState([])
  const [visibility, setVisibility] = useState('')
  const [currentLi, setCurrentLi] = useState('')
  const [sorted, setSorted] = useState([])

  return (
    <>
    <ToDoContext.Provider value = {{toDos,setToDos,visibility,setVisibility,currentLi,setCurrentLi,sorted,setSorted}} >
      <div className="job-form-wrapper-section">
        <JobForm/>
        <JobsContainer/>
      </div>
      <PopUpScreen/>
    </ToDoContext.Provider>
    </>
  );
}

export default App;
