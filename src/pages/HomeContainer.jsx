import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import banner from '../img/banner.JPG';

class HomeContainer extends Component {
    state = {}
    render() {
        return (
            <div className="home-container">
                <img src={banner} alt="banner" className="banner-image" />
                <div className="menu">
                    <p><Link to="/projects">Projects</Link></p>
                    <p><Link to="/contact">Contact</Link></p>
                </div>
            </div>
        );
    }
}

export default HomeContainer;