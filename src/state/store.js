import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './auth/userSLice'
import loginSlice from './auth/loginSlice';

const store = configureStore({
  reducer: {
    register: registerSlice,
    user:loginSlice,
    // other reducers...
  },
});

export default store;