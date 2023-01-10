import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'

class App extends Component {
    // componentDidMount() {
    //     fetch('/api/message')
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    // }
    render() {
        return (
            <Switch>
                <Route
                path="/"
                component={<Home />}
                />
            </Switch>

        )
    }
}

export default App;