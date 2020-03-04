import contentReducer from "./reducer/contentReducer";
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({ content: contentReducer })

const store = createStore(rootReducer)


export default store;