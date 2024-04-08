// 라이브러리 불러오는 곳
import { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// 컴포넌트 불러오는 곳
import FileLoader from './reporting';
import { TopNav } from './components/TopNav';
import { Home } from './components/Home';
import { Cart } from './components/Cart.js';

// 데이터 불러오는 곳
import { addItem } from './store.js';

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
        <Route path="/home" element={<Home />} />
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

export default App;
