
import { useEffect, useState } from "react";
import Image from "./assets/image.jpg";
import icon from "./assets/icon_yellow.png";

function LandingPage() {
    const [chatPhase, setChatPhase] = useState("waiting");
    const [startChat, setStartChat] = useState(false);

    // Start chatbot after the information section appears
    useEffect(() => {
        const infoSection = document.querySelector(".info-section");

        if (!infoSection) return;

        let timer;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    timer = setTimeout(() => {
                        setStartChat(true);
                    }, 2500);

                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(infoSection);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

    // Control chatbot conversation sequence
    useEffect(() => {
        if (chatPhase === "waiting") {
            if (startChat) {
                setChatPhase("user-typing");
            }
            return;
        }

        const delays = {
            "user-typing": 2000,
            "user-message": 700,
            "bot-typing": 2000,
            "bot-message": 4500,
        };

        const nextPhase = {
            "user-typing": "user-message",
            "user-message": "bot-typing",
            "bot-typing": "bot-message",
            "bot-message": "user-typing",
        };

        const timer = setTimeout(() => {
            setChatPhase(nextPhase[chatPhase]);
        }, delays[chatPhase]);

        return () => clearTimeout(timer);
    }, [chatPhase, startChat]);

    // Reveal sections when they enter the screen
    useEffect(() => {
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
                threshold: 0.15,
            }
        );

        const elements = document.querySelectorAll(".reveal");

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const showUser = [
        "user-message",
        "bot-typing",
        "bot-message",
    ].includes(chatPhase);

    const showBot = chatPhase === "bot-message";

    return (
        <div className="landing-page-container">

            {/* Hero Section */}
            <div className="hero-section reveal">
                <p>
                    <span className="reveal-line">
                        Ask your <span className="highlight">Homys</span> what you want Sunlight, long
                    </span>

                    <span className="reveal-line">
                        distance landlord or in low budget
                    </span>
                </p>
            </div>

            {/* Information Section */}
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

            {/* Chat Section */}
            <div className="chat-section">

                {/* User Chat */}
                <div className="chat-1">

                    {chatPhase === "user-typing" && (
                        <div className="chat-1-text typing-bubble">
                            <span className="typing-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                    )}

                    {showUser && (
                        <div className="chat-1-text message-appear">
                            Hi! Homys could you show me any home rent where I will get proper wind and sunlight after opening the window, 2nd floor and landlord doesn't stays nearby under 6000 in Garea area Kolkata
                        </div>
                    )}

                    {/* User image appears when chatbot starts */}
                    {startChat && (
                        <img
                            src={Image}
                            alt="User"
                            className="user-image"
                        />
                    )}
                </div>

                {/* Homys Chat */}
                <div className="chat-2">

                    {chatPhase === "bot-typing" && (
                        <div className="chat-2-text typing-bubble">
                            <span className="typing-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                    )}

                    {showBot && (
                        <div className="chat-2-text message-appear">
                            Sure I am checked 113 home rent in this area and
                            <br />
                            found 5 best suitable rooms for you
                        </div>
                    )}

                    {/* Homys image appears when chatbot starts */}
                    {startChat && (
                        <img
                            src={icon}
                            alt="Homys agent"
                            className="agent-icon"
                        />
                    )}
                </div>

            </div>
        </div>
    );
}

export default LandingPage;
