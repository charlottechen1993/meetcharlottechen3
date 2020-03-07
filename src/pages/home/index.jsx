import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../img/banner.JPG';

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="home-container">
                <img src={banner} alt="banner"/>
                <p>
                    <p><Link to="/projects">Projects</Link></p>
                    <p><Link to="/contact">Contact</Link></p>
                </p>
            </div>
        );
    }
}

export default Home;