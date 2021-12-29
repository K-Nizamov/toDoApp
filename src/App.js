import './App.scss';

import PopUpScreen from './components/PopUpScreen/PopUpScreen';
import JobForm from './components/JobForm/JobForm'
import JobsContainer from './components/JobsContainer/JobsContainer'
import { GlobalProvider } from './context/GloblaState';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  DELETE_TODO: 'delete-todo',
  SHOW_SCREEN: 'show-screen',
  UPDATE_CURRENT_TODO: 'update-current-todo',
  SEARCH_TODO: 'search-todo'
}

function App() {

  return (
    <>
      <GlobalProvider>
        <div className="job-form-wrapper-section">
          <JobForm />
          <JobsContainer />
        </div>
        <PopUpScreen />
      </GlobalProvider>
    </>
  );
}

export default App;
