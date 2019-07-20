import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Head from "./component/head";
import Move1 from "./component/move1";
import Number from "./component/number";
import Logo from "./component/logo";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/head" component={Head}></Route>
                <Route path="/move1" component={Move1}></Route>
                <Route path="/number" component={Number}></Route>
                <Route path="/logo" component={Logo}></Route>
                <Redirect to="/head"/>
            </Switch>
        );
    }
}

export default App;
