import SummaryBg from "./assets/summary-bg.jpg"

function SummaryPage(){
    return (
        <div className="summary-page-container">
            <img src={SummaryBg} alt="Background Image" className="summary-bg" />

            <p className="summary-info">We aren’t just an ordinary Ai tool in Ai Bubble</p>
            <h2 className="summary-heading">We are making the experience of finding your <br /> next home smoother</h2>

            <div className="summary-banner">
                <p>Forget the old system of finding rent, The new era of Real Estate<br /> begins.</p>
            </div>
        </div>
    )
}
export default SummaryPage