import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Index from './components/Index';
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';

import { Route, Switch, Link } from 'react-router-dom';


class App extends Component {
    render() {
        return(
            <div>
                Hello from the index
                <Switch>
                
                </Switch>
            </div>
        )
    }
}

export default App;