// Home 화면에 대한 components

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addData } from '../store/dataSlice';
import { useState } from 'react';

function Home() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [click, setClick] = useState(0);
  return (
    <div>
      <div>
        <img
          src={process.env.PUBLIC_URL + '/seolTab.png'}
          className="main-bg"
        />
      </div>
      <div className="container">
        <div className="row">
          {state.data.map((a, i) => {
            return (
              <div
                className="col-md-4"
                onClick={() => {
                  navigate(`/detail/${state.data[i].id}`);
                }}
              >
                <img
                  src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
                  width="80%"
                />
                <h4>{state.data[i].title}</h4>
                <p>{state.data[i].price}원</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            if (click == 0) {
              axios
                .get('https://codingapple1.github.io/shop/data2.json')
                .then((data) => {
                  console.log(data.data[0]);
                  data.data.map((a, i) => {
                    dispatch(addData(data.data[i]));
                  });
                  setClick(click + 1);
                })
                .catch(() => {
                  console.log('통신 실패');
                });
            } else if (click == 1) {
              axios
                .get('https://codingapple1.github.io/shop/data3.json')
                .then((data) => {
                  console.log(data.data[0]);
                  data.data.map((a, i) => {
                    dispatch(addData(data.data[i]));
                  });
                  setClick(click + 1);
                })
                .catch(() => {
                  console.log('통신 실패');
                });
            } else if (click > 1) {
              alert('상품이 더 없습니다');
            }
          }}
        >
          More
        </button>
      </div>
    </div>
  );
}

export { Home };
