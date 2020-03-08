import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import ProjectsContainer from './pages/ProjectsContainer';
import ContactContainer from './pages/ContactContainer';

const Routes = () => (
    <>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/projects" component={ProjectsContainer}></Route>
        <Route exact path="/contact" component={ContactContainer}></Route>
    </>
)
export default Routes