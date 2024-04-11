import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from '../store';
import { useEffect } from 'react';

function Detail() {
  let { id } = useParams();
  let dispatch = useDispatch();

  let state = useSelector((state) => {
    return state;
  });

  // 왜 이걸 그래도 payload로 보내면 undefined가 나올까..
  let findItem = state.data.find((a) => {
    return a.id == id;
  });

  let array = [
    {
      id: 0,
      name: 'zero',
    },
    {
      id: 1,
      name: 'first',
    },
    {
      id: 2,
      name: 'second',
    },
  ];

  let findArray = array.find((what) => {
    return what.id == 1;
  });
  useEffect(() => {
    let watchedItem = localStorage.getItem('watched');
    watchedItem = JSON.parse(watchedItem);
    watchedItem.push(findItem.id);
    watchedItem = new Set(watchedItem);
    watchedItem = Array.from(watchedItem);
    localStorage.setItem('watched', JSON.stringify(watchedItem));
  }, []);

  return (
    <div className="container">
      {findItem != undefined ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                findItem.id + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{findItem.title}</h4>
            <p>{findItem.content}</p>
            <p>{findItem.price}원</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(
                  // 진짜 알수가없네
                  addItem({ id: findItem.id, name: findItem.title, count: 1 }),
                );
              }}
            >
              주문하기
            </button>
          </div>
        </div>
      ) : (
        <div>상품 준비중입니다</div>
      )}
    </div>
  );
}

export { Detail };
