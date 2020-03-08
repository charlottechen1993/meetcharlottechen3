import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { map, uniqueId } from 'lodash';
import ProjectTiles from '../components/projects/ProjectTiles';
import SiteWrapper from '../components/common/SiteWrapper';
import { PROJECTS } from '../json/project.js';

class ProjectsContainer extends Component {
    importAll = (r) => {
        return r.keys().map(r);
    }

    renderTiles = () => {
        const images = this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

        return map(PROJECTS, (project, index) => {
            return (
                <Col sm={12} md={6} lg={4} key={uniqueId()}>
                    <ProjectTiles
                        id={project.id}
                        title={project.name}
                        description={project.description}
                        image={images[index]} />
                </Col>
            )
        });
    }

    render() {
        return (
            <SiteWrapper title="Project">
                <Container className="project-container" fluid={true}>
                    <Row>
                        {this.renderTiles()}
                    </Row>
                </Container>
            </SiteWrapper>
        );
    }
}

export default ProjectsContainer;
