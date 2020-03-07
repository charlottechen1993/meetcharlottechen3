import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Projects extends Component {
    render() {
        return (
            <Container className="project-container">
                <Row>
                    <Col>
                        <p>Projects</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Projects;
