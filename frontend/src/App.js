import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { profile } from './reducers/profile';
import { cart } from './reducers/cart';
import { products } from './reducers/products';
import { food } from './reducers/food';
import { themes } from 'reducers/themes';
import { ui } from 'reducers/ui';
import { Theme } from './components/theme/Theme';
import { Store } from './pages/Store';
import { Loader } from './components/loader/Loader';
import { Main } from './pages/Main';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { MathGame } from './pages/MathGame';
import { MemoryGame } from './pages/MemoryGame';
import { ProtinFarm } from './pages/ProtinFarm';
import { GameBall } from './components/spaceball/GameBall';
import { housing } from 'reducers/housing';

const reducer = combineReducers({
	themes: themes.reducer,
	profile: profile.reducer,
	ui: ui.reducer,
	cart: cart.reducer,
	products: products.reducer,
	food: food.reducer,
	housing: housing.reducer,
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
						<Route path='/classroom' component={MathGame} />
						<Route path='/memorygame' component={MemoryGame} />
						<Route path='/store' component={Store} />
						<Route path='/farm' component={ProtinFarm} />
						<Route path='/spaceball' component={GameBall} />
						<Route path='/loader' component={Loader} />
					</Switch>
				</BrowserRouter>
			</Theme>
		</Provider>
	);
};
