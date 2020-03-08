import React from 'react';
import PropTypes from 'prop-types';
import banner from '../../img/banner.JPG';
import Button from './Button';

const Banner = ({ title }) => {
    return (
        <div className="banner">
            <Button
                label="Return to Homepage"
                appearance="light"
                to="/" />
            <img src={banner} alt="Banner" className="banner-hero-image" />
            <h1>{title}</h1>
        </div>
    );
}

Banner.propTypes = {
    title: PropTypes.string.isRequired
}
export default Banner;