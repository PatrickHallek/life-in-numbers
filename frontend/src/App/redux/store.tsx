import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import contentReducer from "./reducer/contentReducer";
import thunk from "redux-thunk"
import { answerReducer } from "./reducer/answerReducer";
import { resultReducer } from "./reducer/resultReducer";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers({ content: contentReducer, result: resultReducer, answers: answerReducer })
const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        composeEnhancers()
    )
)


export default store;