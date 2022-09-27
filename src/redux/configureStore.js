import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
// import { throttle } from "lodash";
// import { saveState } from "./cardSlice";

const store = configureStore({
  reducer: {
    cards: cardSlice,
  },
});


// //Throttle: invokes a function at most once per every X milliseconds.
// //The saveState function is called inside the store.subscribe listener so it is called every time the storage state changes. 

// store.subscribe(throttle(() => {
//   saveState({
//     user: store.getState().user
//   })
// }, 1000))

export default store;