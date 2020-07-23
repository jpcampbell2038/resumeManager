import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ResumeDashboardPage from '../components/ResumeDashboardPage';
import AddResumePage from '../components/AddResumePage';
import EditResumePage from '../components/EditResumePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ResumeDashboardPage} exact={true} />
                <Route path="/add" component={AddResumePage} />
                <Route path="/edit/:id" component={EditResumePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;