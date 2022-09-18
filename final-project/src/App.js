import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './components/layouts/Header';
import Router from './routes/Router';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <Router />
      </Container>
    </Fragment>
  );
}

export default App;
