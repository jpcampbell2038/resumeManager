import { createStore, combineReducers } from 'redux';
import resumesReducer from '../reducers/resumes';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            resumes: resumesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};