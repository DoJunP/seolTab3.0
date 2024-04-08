import './App.css';
import { useState } from 'react';
import FileLoader from './reporting';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { Cart } from './Cart.js';
import { addItem } from './store.js';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  let dispatch = useDispatch();
  return (
    <div className="App">
      <TopNav />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <FileLoader />
            </div>
          }
        ></Route>
        <Route path="/manual" element={<div>메뉴얼 페이지</div>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/detail"
          element={
            <div>
              디테일 페이지 입니다
              <button
                onClick={() => {
                  dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 }));
                }}
              >
                추가하기
              </button>
            </div>
          }
        ></Route>
        <Route path="*" element={<div>없는페이지입니다</div>}></Route>
      </Routes>
    </div>
  );
}

function TopNav() {
  let navigate = useNavigate();
  return (
    <Navbar
      style={{
        backgroundColor: 'rgb(139, 95, 241)',
      }}
    >
      <Container>
        <Navbar.Brand
          style={{ color: 'white' }}
          onClick={() => {
            navigate('/');
          }}
        >
          Louis Automation Result
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" style={{ color: 'white' }}>
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/manual');
            }}
            style={{ color: 'white' }}
          >
            Manual
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/cart');
            }}
            style={{ color: 'white' }}
          >
            Cart
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/detail');
            }}
            style={{ color: 'white' }}
          >
            Detail
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
