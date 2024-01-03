// import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     registerUserStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     registerUserSuccess: (state, action) => {
//       state.loading = false;
//       state.user = action.payload;
//     },
//     registerUserFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { registerUserStart, registerUserSuccess, registerUserFailure } = userSlice.actions;

// export const selectUser = (state) => state.user.user;
// export const selectLoading = (state) => state.user.loading;
// export const selectError = (state) => state.user.error;

// export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from './apiCaller';


export const createUserRegister = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/user/registration", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    register: {},
    error: false,
    success: false,
    errorMessage: ""
  },
  reducers: {
    registrationClean: (state) => {
      state.error = false;
      state.errorMessage = "";
      state.success = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUserRegister.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(createUserRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.register = action.payload;
      state.errorMessage = "";
      state.success = true;
    });
    builder.addCase(createUserRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload.data.message;
    });
  }
});

export const { registrationClean } = registerSlice.actions;
export default registerSlice.reducer;