
import { useEffect, useRef, useState } from "react";
import Image from "./assets/image.jpg";
import icon from "./assets/icon_yellow.png";

function LandingPage({ onSequenceComplete }) {
    const [showHero, setShowHero] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [showBot, setShowBot] = useState(false);

    const completeRef = useRef(onSequenceComplete);

    useEffect(() => {
        completeRef.current = onSequenceComplete;
    }, [onSequenceComplete]);

    // CONTROLLED ANIMATION SEQUENCE
    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowHero(true);
        }, 100);

        const timer2 = setTimeout(() => {
            setShowInfo(true);
        }, 1800);

        const timer3 = setTimeout(() => {
            setShowUser(true);
        }, 4100);

        const timer4 = setTimeout(() => {
            setShowBot(true);
        }, 5300);

        const timer5 = setTimeout(() => {
            completeRef.current?.();
        }, 6500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
        };
    }, []);

    return (
        <div className="landing-page-container">

            {/* HERO SECTION */}
            <div className={`hero-section reveal ${showHero ? "is-visible" : ""}`}>
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
            <div className={`info-section reveal ${showInfo ? "is-visible" : ""}`}>
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
