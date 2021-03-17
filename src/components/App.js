import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BagdeNews from '../pages/BadgeNews';
import Badges from '../pages/Badges';

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BagdeNews} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;