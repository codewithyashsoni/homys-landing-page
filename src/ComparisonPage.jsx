import PexelsMarcus from "./assets/pexels-marcus.jpg"
import PexelsLwh from "./assets/pexels-lwh.jpg"
import IconYellow from "./assets/icon_yellow.png"

function ComparisonPage(){
    return(
        <div className="comparison-page-container">
            <h2 className="comparison-page-heading">You can now compare different homes</h2>

            <div className="images-container">
                <img src={PexelsMarcus} alt="Pexels Marcus" className="pexels-marcus-img" />

                <div className="pros-and-cons">
                    <img src={IconYellow} className="comparison-page-icon" />
                    <p>Showing the pros & cons of these 2 homes</p>
                </div>

                <img src={PexelsLwh} alt="Pexels Lwh Photo" className="pexels-lwh-img" />
            </div>

        </div>
    )
}
export default ComparisonPage