import React from 'react'
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { themes } from 'reducers/themes';
import { Theme } from './components/Theme';
import { Main } from './pages/Main';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { MathGame } from "./pages/MathGame";

const reducer = combineReducers({
	themes: themes.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
		<Provider store={store}>
			<Theme>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Main} />
						<Route path='/signin' component={SignIn} />
						<Route path='/signup' component={SignUp} />
            <Route path='/mathgame' component={MathGame} />
					</Switch>
				</BrowserRouter>
			</Theme>
		</Provider>
  )
}
