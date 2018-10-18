import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import appReducer from './reducers/index'; //import app reducers dari index reducers

const middleware = applyMiddleware(thunk,logger,promise());
const store = createStore(appReducer, middleware);

export default store;