import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
        <a href="/">Home</a>
        <div className="subnav">
          <button className="subnavbtn">Blog <i className="fa fa-caret-down"></i></button>
          <div className="subnav-content">
            <a href="/mountains">Mountains</a>
            <a href="#team">Cities</a>
            <a href="#careers">Culture</a>
          </div>
        </div> 
        <div className="subnav">
          <button className="subnavbtn">Articles <i className="fa fa-caret-down"></i></button>
          <div className="subnav-content">
            <a href="/articles">Articles</a>
            <a href="#deliver">By me</a>
            <a href="#package">People's experience</a>
          </div>
        </div> 
        <a href="/about">About</a>
        <a href="/newsletter">Newsletter</a>
      </div>
    );
};

export default Navbar;