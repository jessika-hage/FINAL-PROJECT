import React from 'react'
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { themes } from "reducers/themes";
import { Theme } from './components/Theme';
import { Main } from './pages/Main'

const reducer = combineReducers({
  themes: themes.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Theme>
        <Main />
      </Theme>
    </Provider>
  )
}
