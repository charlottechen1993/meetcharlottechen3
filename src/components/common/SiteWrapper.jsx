import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Banner from './Banner';

class SiteWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.node
    }

    render() {
        const { title, children } = this.props;

        return (
            <div className="site-wrapper">
                <div className="left-content">
                    <Banner title={title} />
                </div>
                <div className="right-content">
                    {children}
                </div>
            </div>
        );
    }
}

export default SiteWrapper;