import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: "",
    missions: "",
  },
});

export default store;
