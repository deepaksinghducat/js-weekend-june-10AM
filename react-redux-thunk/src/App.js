import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect } from 'react';
import { getProducts } from './redux/actions/ProductActions';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  })

  return (
    <Fragment>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
