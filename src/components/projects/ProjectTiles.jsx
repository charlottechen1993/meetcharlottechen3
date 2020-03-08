import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';

class ProjectTiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
    }

    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        image: PropTypes.string
    }

    render() {
        const { title, description, id, image } = this.props;

        return (
            <div className="project-tiles">
                <img src={image} alt={title} className="tile-image" />
                <div className="tile-image-overlay">
                    <div className="text-area">
                        <div className="title">{title}</div>
                        <div className="description">{description}</div>
                    </div>
                    <Button
                        appearance="light"
                        label="Go to Project"
                        to={`/project/${id}`} />
                </div>
            </div>
        );
    }
}

export default ProjectTiles;