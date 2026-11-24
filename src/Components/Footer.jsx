
import { useEffect, useRef } from 'react'
import './Footer.css'

import homysLogo from '../assets/homyslogo.png'
import linkdinlogo from '../assets/linkdin.png'
import instalogo from '../assets/insta.png'
import Xlogo from '../assets/X.png'
import devloperlogo from '../assets/devloper.png'

function Footer() {
    const contactRef = useRef(null)
    const footerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')

                        // Animate only once
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        if (contactRef.current) {
            observer.observe(contactRef.current)
        }

        if (footerRef.current) {
            observer.observe(footerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <>
            {/* CONTACT SECTION */}

            <section
                className="footer-contact-section reveal-on-scroll"
                ref={contactRef}
            >

                <div className="contact-form-container">

                    <h2>Get In Touch</h2>

                    <form>

                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            required
                        />

                        <button type="submit">
                            Send Message
                        </button>

                    </form>

                </div>

                <div className="contact-promise">

                    <h2>What We Promise, We Deliver.</h2>

                    <p>
                        Your trust matters to us. Have questions,
                        suggestions, or concerns? Just send us a
                        message. We're always happy to hear from you.
                    </p>

                    <span>
                        We're just a message away.
                    </span>

                </div>

            </section>

            {/* FOOTER */}

            <footer
                className="footer-container reveal-on-scroll"
                ref={footerRef}
            >

                <div className="footer-left">

                    <div className="footer-logo">
                        <img src={homysLogo} alt="HOMYS Logo" />
                    </div>

                    <div className="footer-socials">

                        <a
                            href="YOUR_LINKEDIN_URL"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img src={linkdinlogo} alt="LinkedIn" />
                        </a>

                        <a
                            href="YOUR_INSTAGRAM_URL"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <img src={instalogo} alt="Instagram" />
                        </a>

                        <a
                            href="YOUR_X_URL"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X"
                        >
                            <img src={Xlogo} alt="X" />
                        </a>

                    </div>

                    <div className="footer-contact">

                        <a href="mailto:contact@listenhomys.com">
                            contact@listenhomys.com
                        </a>

                    </div>

                </div>

                <div className="footer-right">

                    <div className="footer-developer">

                        <div className="developer-icon">
                            <img
                                src={devloperlogo}
                                alt="Developer"
                            />
                        </div>

                        <div className="developer-info">

                            <p className="developed-by">
                                Developed By
                            </p>

                            <div className="developer-names">
                                <span>Yash</span>
                                <span>Tushar</span>
                                <span>Tiparna</span>
                                <span>Sayan</span>
                            </div>

                        </div>

                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer
