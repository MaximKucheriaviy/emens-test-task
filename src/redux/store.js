import { configureStore } from "@reduxjs/toolkit";
import { eventSlice } from "./slices/eventSlice";
import { keyWordSlice } from "./slices/keyWordSlice";

export const store = configureStore({
  reducer: {
    events: eventSlice.reducer,
    keyword: keyWordSlice.reducer,
  },
});
