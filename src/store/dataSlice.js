import { createSlice } from "@reduxjs/toolkit";
import api from '../api/api';

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    isSuccess: (state, action) => {
      state.data = [...action.payload];
    }
  },
});

export const { isSuccess} = dataSlice.actions;


export const getData = () => (dispatch)=>{
    api.get('/users')
    .then((res)=>dispatch(isSuccess(res.data)))
    .catch((err)=>console.log(err))
}

export default dataSlice.reducer;