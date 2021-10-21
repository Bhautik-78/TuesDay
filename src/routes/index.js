import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import MainApp from 'components/MainApp';
import Home from 'routes/Home';
import About from "./About";
import Organizations from "./Organizations";
import Individuals from "./Individuals";
import ContactUs from "./contactUs";

const Routes = () => {
    return (
        <BrowserRouter>
            <MainApp>
                <Switch>
                    <Route
                        path="/home"
                        component={Home}
                    />
                    <Route
                        path="/about"
                        component={About}
                    />
                    <Route
                        path="/organizations"
                        component={Organizations}
                    />
                    <Route
                        path="/individuals"
                        component={Individuals}
                    />
                    <Route
                        path="/contactUs"
                        component={ContactUs}
                    />
                    <Redirect exact path="/" to="/home"/>
                </Switch>
            </MainApp>
        </BrowserRouter>
    )
};

export default Routes;
