import React from 'react';
import './footer.css';


const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#3b5998' }}
                        href="https://www.facebook.com/share/c2ShLPRTZqgB6FKo/?mibextid=wwXIfr"
                        target="_blank" 
                        rel="noopener noreferrer"  
                        role="button"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>       

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }}
                        href="https://www.instagram.com/diana.rentea/profilecard/?igsh=MW9yZnVka3BnNnhldA=="
                        target="_blank" 
                        rel="noopener noreferrer"  
                        role="button"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#0082ca' }}
                        href="https://www.linkedin.com/in/diana-andreea-ren%C8%9Bea-613107255"
                        target="_blank" 
                        rel="noopener noreferrer"  
                        role="button"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </section>
            </div>
            <div
                className="text-center p-3"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            >
                © 2023 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">
                    MDBootstrap.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;
