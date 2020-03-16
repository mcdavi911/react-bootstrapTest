import React from 'react';
import Nav from '../Nav/Nav';
//import Container from 'react-bootstrap/Container';
//import logo from './logo.svg';
//import './App.css';

function Layout(props:{children: {}}) {
  return (
    <>
      
        <Nav />
      
      
      <main>
        {props.children}
      </main>
    </>
  );
}

export default Layout;