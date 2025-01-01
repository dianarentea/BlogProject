import React from "react";
import { Navbar, Slideshow, Footer } from "@components";
import "./newsletterPage.css";

const NewsletterPage = () => {
    return (
        <div>
            <div className="container">
                <div className="slideshow-container">
                    <Slideshow />
                </div>
                <Navbar />
                <hr/>
                <div className="newsletter-container">
                    <div className="text-container">
                    <h1>Subscribe to our Newsletter!</h1>
                    <p>We do monthly updates with new tracks and stories from people. If you want to be kept up to date, subscriber to our <span>Newsletter</span> and let on our side to notify you when it's something new ahead!</p>
                    </div>
                    <form>
                        <input type="email" className="email-form" placeholder="Enter a valid email address" />
                        <button type="submit" className="button1-form">SUBMIT</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default NewsletterPage;