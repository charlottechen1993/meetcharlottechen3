import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { map, uniqueId } from 'lodash';
import ProjectTiles from '../../components/projects/ProjectTiles';
import { PROJECTS } from '../../json/project.js';

class Projects extends Component {
    renderTiles = () => {
        return map(PROJECTS, (project) => {
            return (
                <Col sm={12} md={4} lg={3} key={uniqueId()}>
                    <ProjectTiles
                        id={project.id}
                        title={project.name} />
                </Col>
            )
        });
    }

    render() {
        return (
            <Container className="project-container">
                <Row>
                    {this.renderTiles()}
                </Row>
            </Container>
        );
    }
}

export default Projects;
