import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DummyContext, { DummyContextProvider } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <DummyContext.Provider value={{
  //     fullName: "fdsadfsafdsaf",
  //     age: 10
  //   }}>
  //     <App />
  //   </DummyContext.Provider>
  // </React.StrictMode>

  <React.StrictMode>
    <DummyContextProvider>
      <App />
    </DummyContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
