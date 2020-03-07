import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import Projects from './pages/projects';
import Contact from './pages/contact';

const Routes = () => (
    <>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
    </>
)
export default Routes