import React from "react";
import { Navbar, Slideshow } from "@components";
import "./newsletterPage.css";

const NewsletterPage = () => {
    return (
        <div className="container">
            <div className="slideshow-container">
                <Slideshow />
            </div>
            <Navbar />
            <div className="newsletter-container">
                <h3>Newsletter...</h3>
                <p>Subscribe to our newsletter to get the latest news and articles</p>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default NewsletterPage;