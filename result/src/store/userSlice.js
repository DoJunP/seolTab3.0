import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      // state 파라미터는 기존 값임 'kim'
      state.name = 'park';
    },
    increase(state, action) {
      // state 변경함수에 파라미터 뚫는 법
      state.age += action.payload;
    },
  },
});

export let { changeName, increase } = user.actions; // 함수 export 해줘야 사용 가능함
export { user };
