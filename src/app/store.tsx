import { configureStore } from "@reduxjs/toolkit";
// import reducers from slice files: featureNameReducer

export const store = configureStore({
  reducer: {
    // pass reducers with their name
    // featureName: featureNameReducer,
  },
});

export default store;
