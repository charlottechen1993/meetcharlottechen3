import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import ProjectsContainer from './pages/ProjectsContainer';
import ExperienceContainer from './pages/ExperienceContainer';
import ContactContainer from './pages/ContactContainer';

const Routes = () => (
    <>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/projects" component={ProjectsContainer}></Route>
        <Route exact path="/experience" component={ExperienceContainer}></Route>
        <Route exact path="/contact" component={ContactContainer}></Route>
    </>
)
export default Routes