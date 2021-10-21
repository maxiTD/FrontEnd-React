import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import {LoginScreen} from '../components/auth/LoginScreen';
import {DataGrid} from '../components/DataGrid';
import { DataImg } from '../components/DataImg';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={LoginScreen} />
                    <Route exact path="/posts" component={DataGrid} />
                    <Route exact path="/images" component={DataImg} />
                    <Redirect to="/posts"/>
                </Switch>
            </div>
        </Router>
    )
}
