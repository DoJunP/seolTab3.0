// Home 화면에 대한 components

import { useSelector, useDispatch } from 'react-redux';

function Home() {
  let state = useSelector((state) => {
    return state;
  });
  console.log(state.data);
  let dispatch = useDispatch();
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
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>

          {state.data.map((a, i) => {
            return (
              <div className="col-md-4">
                <img
                  src={`https://codingapple1.github.io/shop/shoes${i}.jpg`}
                  width="80%"
                />
                <h4>상품명</h4>
                <p>상품정보</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Home };
