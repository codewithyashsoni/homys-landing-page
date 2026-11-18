import Image from "./assets/image.jpg"
import icon from "./assets/icon_yellow.png"
function LandingPage(){

    return(
    <div className="landing-page-container">
        <div className="hero-section">
            <p>Ask your <span className="highlight">Homys</span> what you want Sunlight, long<br /> distance landlord or in  low budget</p>
        </div>
        <div className="info-section">
            <p>No more scrolling long list with messy filters or contacting where your requirements doesn’t<br/> match</p>
        </div>

        <div className="chat-section">
            <div className="chat-1">
                <div className="chat-1-text">Hi! Homys could you show me any home rent where I will get proper wind and sunlight after opening the window, 2nd floor and landlord doesn't stays nearby under 6000 in Garea area Kolkata</div>
                <img src={Image} alt="User Image" className="user-image" />
            </div>

            <div className="chat-2">
                <div className="chat-2-text">Sure I am checked 113 home rent in this area and<br /> found 5 best suitable rooms for you</div>
                <img src={icon} alt="Agent icon" className="agent-icon" />
            </div>
        </div>
    </div>
    )
}
export default LandingPage