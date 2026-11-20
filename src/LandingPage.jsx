import { useEffect, useState } from "react";
import Image from "./assets/image.jpg";
import icon from "./assets/icon_yellow.png";

function LandingPage() {
    const [showUser, setShowUser] = useState(false);
    const [showBot, setShowBot] = useState(false);

    // TEXT REVEAL ANIMATION
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // CHAT MESSAGE ANIMATION
    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowUser(true);
        }, 2000);

        const timer2 = setTimeout(() => {
            setShowBot(true);
        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="landing-page-container">

            {/* HERO SECTION */}
            <div className="hero-section reveal">
                <p>
                    <span className="reveal-line">
                        Ask your{" "}
                        <span className="highlight">Homys</span>{" "}
                        what you want Sunlight, long
                    </span>

                    <span className="reveal-line">
                        distance landlord or in low budget
                    </span>
                </p>
            </div>

            {/* INFORMATION SECTION */}
            <div className="info-section reveal">
                <p>
                    <span className="reveal-line">
                        No more scrolling long list with messy filters or contacting where your requirements doesn’t
                    </span>

                    <span className="reveal-line">
                        match
                    </span>
                </p>
            </div>

            {/* CHAT SECTION */}
            <div className="chat-section">

                {/* USER CHAT */}
                {showUser && (
                    <div className="chat-1">

                        <div className="chat-1-text bubble-right">
                            Hi! Homys could you show me any home rent where I will get proper wind and sunlight after opening the window, 2nd floor and landlord doesn't stays nearby under 6000 in Garea area Kolkata
                        </div>

                        <img
                            src={Image}
                            alt="User"
                            className="user-image image-appear"
                        />

                    </div>
                )}

                {/* HOMYS CHAT */}
                {showBot && (
                    <div className="chat-2">

                        <img
                            src={icon}
                            alt="Homys agent"
                            className="agent-icon image-appear"
                        />

                        <div className="chat-2-text bubble-left">
                            Sure I am checked 113 home rent in this area and found 5 best suitable rooms for you
                        </div>

                    </div>
                )}

            </div>

        </div>
    );
}

export default LandingPage;
