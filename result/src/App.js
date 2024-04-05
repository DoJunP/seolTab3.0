import './App.css';
import { useState } from 'react';
import FileLoader from './reporting';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Nav />
      <FileLoader />
    </div>
  );
}

function Nav() {
  return (
    <Navbar
      style={{
        backgroundColor: 'rgb(139, 95, 241)',
      }}
    >
      <Container>
        <Navbar.Brand style={{ color: 'white' }}>
          Louis Automation Result
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default App;
