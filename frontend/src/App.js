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
import { housing } from 'reducers/housing';
import { Theme } from './components/theme/Theme';
import { Store } from './pages/Store';
import { Main } from './pages/Main';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Classroom } from './pages/Classroom';
import { MemoryGame } from './pages/MemoryGame';
import { ProteinFarm } from './pages/ProteinFarm';
import { GameBall } from './components/spaceball/GameBall';
import { Quiz } from './pages/Quiz';
// import { SnakeGame } from './components/floor-two/snake/SnakeGame';
// import { ChefsTable } from './components/floor-two/chefstable/ChefsTable';
// import { Hangman } from './components/floor-two/hangman/Hangman';

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
						<Route path='/classroom' component={Classroom} />
						<Route path='/memorygame' component={MemoryGame} />
						<Route path='/store' component={Store} />
						<Route path='/farm' component={ProteinFarm} />
						<Route path='/spaceball' component={GameBall} />
						<Route path='/quiz' component={Quiz} />
						{/* <Route path='/snakegame' component={SnakeGame} />
						<Route path='/chefstable' component={ChefsTable} />
						<Route path='/hangman' component={Hangman} /> */}
					</Switch>
				</BrowserRouter>
			</Theme>
		</Provider>
	);
};
