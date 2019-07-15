
//dependecies
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import reducer from './reducers'; //combine reducer

//Creacion de constantes para la creacion del store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloaderState = {};
const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware,thunk));

//Creacíon del Store
const store = createStore(reducer,preloaderState,enhancer);

export default store;

