import { createStore, applyMiddleware } from "redux";
import mySagas from '../sagas';
import createSagaMiddleware from 'redux-saga';
import reducer from "../Reducer";
const { composeWithDevTools } = require('redux-devtools-extension');
// const store = createStore(
//     reducer
// );
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
)
export default store;
sagaMiddleware.run(mySagas)