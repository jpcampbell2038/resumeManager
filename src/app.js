import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter, sortByStatus, sortByDate, sortByGradDate, setStartDate, setEndDate } from './actions/filters';
import { getVisibleResumes } from './selectors/resumes';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addResume, removeResume, editResume } from './actions/resumes';

const store = configureStore();

store.dispatch(addResume({ studentName: 'james', status: 'b', graduationDate: 1, createdAt: 1000 }));
const resume2 = store.dispatch(addResume({ studentName: 'bandit', status: 'a', graduationDate: 2, createdAt: -1000 }));
const resume3 = store.dispatch(addResume({ studentName: 'jim', status: 'c', graduationDate: 3, createdAt: 2000 }));

const state = store.getState();
console.log(state);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));