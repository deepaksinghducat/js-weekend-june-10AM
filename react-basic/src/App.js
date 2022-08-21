import { Fragment } from 'react';
import './App.css';
import Counter from './components/Counter';
import UseEffect from './components/UseEffect';
import UseReducer from './components/UseReducer';
import Parent from './optimization/Parent';


function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
