import { createSlice } from '@reduxjs/toolkit';

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    flippingBadge: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setFlippingBadge: (state, action) => {
        state.flippingBadge = action.payload
    }
  }
});