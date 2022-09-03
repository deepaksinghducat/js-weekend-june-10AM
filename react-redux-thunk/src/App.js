import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {

  return (
    <Fragment>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
