import { createSlice } from "@reduxjs/toolkit";
export const keyWordSlice = createSlice({
  name: "keyword",
  initialState: {
    value: "",
  },
  reducers: {
    setKeyword: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setKeyword } = keyWordSlice.actions;
