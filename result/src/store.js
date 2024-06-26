import { configureStore, createSlice } from '@reduxjs/toolkit';
import { user } from './store/userSlice.js';
import { data } from './store/dataSlice.js';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id == action.payload;
      });
      state[번호].count++;
    },
    addItem(state, action) {
      let newItem = action.payload;
      let checkItem = state.find((a) => {
        return a.id == newItem.id;
      });
      console.log(checkItem);
      if (checkItem) {
        alert('이미 추가한 아이템입니다');
      } else {
        state.push(action.payload);
        alert('상품이 장바구니에 추가되었습니다');
      }
    },
  },
});

export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
    user: user.reducer,
    data: data.reducer,
  },
});
