import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "events",
  initialState: {
    value: [],
  },
  reducers: {
    addEvent(state, { payload }) {
      state.value.push(payload);
    },
  },
});

export const { addEvent } = eventSlice.actions;
