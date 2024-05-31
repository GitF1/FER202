

import JobBoard from './components/JobBoard';
import Home from './pages/Home';
import './App.css';



function App() {

  return (
    <div className="App">
      <JobBoard>
        <Home />
      </JobBoard>
    </div>
  );
}

export default App;
