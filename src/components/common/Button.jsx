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
        appearance: PropTypes.string,
        to: PropTypes.string,
        onclick: PropTypes.func
    }

    static defaultProps = {
        type: "button"
    }

    render() {
        const { to, label, appearance } = this.props;

        if (to) {
            return (
                <div className={`btn-${appearance}`}>
                    <Link to={to}>{label}</Link>
                </div>
            )
        }
        return (
            <button className={`btn-${appearance}`} type="button" onclick={onclick}>
                {label}
            </button>
        )
    }
}

export default Button;
