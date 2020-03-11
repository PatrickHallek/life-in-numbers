import { combineReducers, createStore } from 'redux';
import contentReducer from "./reducer/contentReducer";
import { answerReducer } from "./reducer/answerReducer";
import { resultReducer } from "./reducer/resultReducer";

const rootReducer = combineReducers({ content: contentReducer, result: resultReducer, answers: answerReducer })

const store = createStore(rootReducer)


export default store;