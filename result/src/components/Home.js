// Home 화면에 대한 components

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addData } from '../store/dataSlice';
import { useEffect, useState } from 'react';

function Home() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [click, setClick] = useState(0);
  useEffect(() => {
    let watchedItem = localStorage.getItem('watched');
    if (watchedItem == null) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);
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

      <Floating />
    </div>
  );
}

function Floating() {
  let state = useSelector((state) => {
    return state;
  });
  let watchedItem = localStorage.getItem('watched');

  // watchedItem이 null이 아닌지 확인하고, null이 아닌 경우에만 JSON.parse()를 사용하여 파싱합니다.
  let 담긴상품 = watchedItem ? JSON.parse(watchedItem) : [];

  let 찾을상품 = 담긴상품.map((productId) =>
    state.data.find((item) => item.id === productId),
  );

  return (
    <>
      <div className="floating-ui">
        <div style={{ backgroundColor: 'black' }}>
          <p style={{ textAlign: 'center', fontSize: '90%', color: 'white' }}>
            최근 본 상품 : {`${담긴상품.length}`}
          </p>
        </div>
        {담긴상품.length === 0 ? (
          <div>
            <p>No Data</p>
          </div>
        ) : (
          담긴상품.map((a, i) => {
            return (
              <div style={{ border: '1px solid black', marginBottom: '5px' }}>
                <img
                  style={{ width: '100%' }}
                  src={`https://codingapple1.github.io/shop/shoes${
                    담긴상품[i] + 1
                  }.jpg`}
                ></img>
                <p style={{ fontSize: '10px' }}>{찾을상품[i].title}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

function Homework() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  useEffect(() => {
    if (count != 0 && count < 3) {
      setAge(age + 1);
    }
  }, [count]);

  return (
    <div>
      <div>안녕하십니까 전 {age}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        누르면한살먹기
      </button>
    </div>
  );
}

export { Home };
