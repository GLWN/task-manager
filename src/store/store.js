import { createStore, applyMiddleware, compose } from "redux"
import appReducer from '../reducers/appReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware()));

store.subscribe(() => {
    const todos = store.getState().todos;
    localStorage.setItem('todos', JSON.stringify(todos));
});

export default store