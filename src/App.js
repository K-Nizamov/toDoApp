import './App.scss';
import JobForm from './components//JobForm/JobForm';
import JobsContainer from './components/JobsContainer/JobsContainer';
import PopUpScreen from './components/PopUpScreen/PopUpScreen';

function App() {
  return (
    <>
    <div className="job-form-wrapper-section">
      <JobForm/>
      <JobsContainer/>
    </div>
    <PopUpScreen/>

    </>
  );
}

export default App;
