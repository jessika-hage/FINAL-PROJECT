import { createSlice } from "@reduxjs/toolkit";

import { darkTheme } from "../styledcomponents/StyledTheme";

export const themes = createSlice({
    name: "themes",
    initialState: { theme: darkTheme },
    reducers: {
      changeTheme: (state, action) => {
          state.theme = action.payload;
        },
    }
  });