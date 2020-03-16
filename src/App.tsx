import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import Layout from './components/Layout/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import NavMain from './components/Nav/Nav';
//import Button from 'react-bootstrap/Button';

import './App.scss';

const App = () => {
  const [navHeight, setNavHeight ] = useState(0);

 useEffect(() => {
    const height = document.querySelector('.navbar')?.clientHeight;

    if (height) {
      setNavHeight(height);
    }

 },[])
  
  return (
    
    <div style={{paddingTop: navHeight}} className="App">
      <Layout>
        <Container>
        <Row className='my-5' style={{height: '80vh'}}>
          <Col className='my-auto'>Intro Message</Col>
          <Col className='my-auto'>Play Video</Col>
        </Row>
          




        </Container>


      </Layout>



      {
        /*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        */
      }

    </div>
  );
}

export default App;
