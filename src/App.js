import './App.scss';

import PopUpScreen from './components/PopUpScreen/PopUpScreen';
import JobForm from './components/JobForm/JobForm'
import JobsContainer from './components/JobsContainer/JobsContainer'
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [visibility, setVisibility] = useState('')
  const [currentLi, setCurrentLi] = useState('')
  const [sorted, setSorted] = useState([])


  return (
    <>
      <div className="job-form-wrapper-section">
        <JobForm setToDos={setToDos} toDos={toDos} />
        <JobsContainer
          toDos={toDos}
          setToDos={setToDos}
          setVisibility={setVisibility}
          currentLi={currentLi}
          setCurrentLi={setCurrentLi}
          sorted = {sorted}
          setSorted={setSorted}
        />
      </div>
      <PopUpScreen
        toDos={toDos}
        setToDos={setToDos}
        visibility={visibility}
        setVisibility={setVisibility}
        currentLi={currentLi}
        sorted = {sorted}
        setSorted={setSorted}
      />
    </>
  );
}

export default App;
