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
            <a href="/cities">Countryside</a>
          </div>
        </div> 
        <div className="subnav">
          <button className="subnavbtn">Articles <i className="fa fa-caret-down"></i></button>
          <div className="subnav-content">
            <a href="/articles">People's experience</a>
            <a href="/articlesByMe">By me</a>
          </div>
        </div> 
        <a href="/about">About</a>
        <a href="/newsletter">Newsletter</a>
        <a href="/yourStory">Your story</a>
      </div>
    );
};

export default Navbar;