import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  email: null,
  accessToken: null,
};

export const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setLogOut: () => {
      return {
        username: null,
        email: null,
        accessToken: null,
      };
    },
  },
});
