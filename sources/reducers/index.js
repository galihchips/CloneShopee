import { combineReducers } from 'redux';
import dataFashions from './fashions';
import dataProducts from './products';
import dataCart from './cart';
import register from './register';
import login from './login';
import dataCouriers from './courier';

const appReducer = combineReducers({
   fashions : dataFashions,
   products : dataProducts,
   login : login,
   register : register,
   carts : dataCart,
   couriers : dataCouriers
});

export default appReducer;