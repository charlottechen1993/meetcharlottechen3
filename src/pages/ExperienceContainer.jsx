import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SiteWrapper from '../components/common/SiteWrapper';
import { Container, Row, Col } from 'react-bootstrap';

class ExperienceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <SiteWrapper title="Experience">
                <Container className="experience-container">
                    <Row>
                        Experience
                    </Row>
                </Container>
            </SiteWrapper>
        );
    }
}

export default ExperienceContainer;