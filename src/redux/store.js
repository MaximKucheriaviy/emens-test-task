import { configureStore } from "@reduxjs/toolkit";
import { eventSlice } from "./slices/eventSlice";

export const store = configureStore({
  reducer: {
    events: eventSlice.reducer,
  },
});
