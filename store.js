import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './userSLice'

const store = configureStore({
  reducer: {
    user: registerSlice,
    // other reducers...
  },
});

export default store;