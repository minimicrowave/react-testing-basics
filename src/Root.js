import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';
import stateValidator from 'middlewares/stateValidator';
// import async from 'middlewares/async'

export default ({ children, initialState = {} }) => {
	const store = createStore(reducers, initialState, applyMiddleware(reduxPromise, stateValidator));
	return <Provider store={store}>{children}</Provider>;
};
