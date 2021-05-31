import { createSlice } from "@reduxjs/toolkit";

import { lightTheme } from "../styledcomponents/StyledTheme";

export const themes = createSlice({
    name: "themes",
    initialState: { theme: lightTheme },
    reducers: {
      changeTheme: (state, action) => {
          state.theme = action.payload;
        },
    }
  });