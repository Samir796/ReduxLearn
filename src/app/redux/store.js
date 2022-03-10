import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {globalReducer} from './modules/global/reducer';

const combinedReducers = combineReducers({
  global: globalReducer,
});

export default function configureStore(initialState = {}) {
  return createStore(combinedReducers, initialState, applyMiddleware(thunk));
}
