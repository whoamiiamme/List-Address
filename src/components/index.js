import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import ModelList from './../containers/modelList';
import ModelNew from './../containers/modelNew';
import ModelShow from './../containers/modelShow';
import ModelEdit from './../containers/modelEdit';

import NotFound from './NotFound';

const App = () => {
    return(
        <React.Fragment>
            <Router>
                <Header/>

                <Switch>
                    <Route path="/" exact component={ModelList} />
                    <Route path="/profile/new" component={ModelNew} />
                    <Route path="/profile/edit/:id" component={ModelEdit} />

                    <Route path="/view/:id" component={ModelShow} />
                    <Route component={NotFound} />
                </Switch>

            </Router>
            
        </React.Fragment>
    )
}

export default App;