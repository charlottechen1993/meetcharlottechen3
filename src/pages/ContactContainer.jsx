import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SiteWrapper from "../components/common/SiteWrapper";

class ContactContainer extends Component {
    render() {
        return (
            <SiteWrapper title="Contact">
                 <Container className="contact-container">
                    <Row>
                        <Col>
                            <p>Contact</p>
                        </Col>
                    </Row>
                </Container>
            </SiteWrapper>
        );
    }
}

export default ContactContainer;
