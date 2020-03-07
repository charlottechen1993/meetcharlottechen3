import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';

class ProjectTiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: PropTypes.string.isRequired
        };
    }

    render() {
        const { title, id } = this.props;
        
        return (
            <div className="project-tiles">
                <h2>{title}</h2>
                <Button
                    type="link"
                    label="Go to Project"
                    to={`/project/${id}`} />
            </div>
        );
    }
}

export default ProjectTiles;