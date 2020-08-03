import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addResume } from './actions/resumes';

const store = configureStore();

store.dispatch(addResume({ studentName: 'james', status: 'Needs Revision', graduationDate: 1, createdAt: 1000 }));
store.dispatch(addResume({ studentName: 'bandit', status: 'Reviewed', graduationDate: 2, createdAt: -1000 }));
store.dispatch(addResume({ studentName: 'jim', status: 'Needs Revision', graduationDate: 3, createdAt: 2000 }));

const state = store.getState();
console.log(state);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));