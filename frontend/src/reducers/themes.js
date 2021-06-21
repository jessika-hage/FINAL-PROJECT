import { createSlice } from "@reduxjs/toolkit";

import { blueTheme } from "../styledcomponents/StyledTheme";

export const themes = createSlice({
    name: "themes",
    initialState: { theme: blueTheme },
    reducers: {
      changeTheme: (state, action) => {
          state.theme = action.payload;
        },
    }
  });