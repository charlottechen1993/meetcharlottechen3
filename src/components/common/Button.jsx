import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    static propTypes = {
        label: PropTypes.string,
        type: PropTypes.string,
        to: PropTypes.string
    }

    static defaultProps = {
        type: "button"
    }

    render() {
        const { type, to, label } = this.props;

        if (type === "link") {
            return (
                <div>
                    <Link to={to}>{label}</Link>
                </div>
            )
        }

        return <button type="button">{label}</button>
    }
}

export default Button;
