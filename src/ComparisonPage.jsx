import { useEffect, useRef } from "react"

import PexelsMarcus from "./assets/pexels-marcus.jpg"
import PexelsLwh from "./assets/pexels-lwh.jpg"
import IconYellow from "./assets/icon_yellow.png"

function ComparisonPage() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current

        if (!section) return

        const elements = section.querySelectorAll(".comparison-reveal")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("comparison-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.15
            }
        )

        elements.forEach((element) => observer.observe(element))

        return () => observer.disconnect()
    }, [])

    return (
        <div
            className="comparison-page-container"
            ref={sectionRef}
        >

            <h2 className="comparison-page-heading comparison-reveal">
                You can now compare different homes
            </h2>

            <div className="images-container">

                {/* HOME 1 */}
                <div className="home-comparison-card comparison-reveal">

                    <img
                        src={PexelsMarcus}
                        alt="Home 1"
                        className="pexels-marcus-img"
                    />

                    <div className="home-details">

                        <h3>Pros:</h3>
                        <ul>
                            <li>Surrounded by greenery.</li>
                            <li>Multiple balconies and outdoor spaces.</li>
                            <li>Attractive residential design.</li>
                        </ul>

                        <h3>Cons:</h3>
                        <ul>
                            <li>Exterior maintenance may require extra attention.</li>
                            <li>Less natural light in some areas may be possible.</li>
                        </ul>

                    </div>
                </div>

                {/* CENTER COMPARISON */}
                <div className="pros-and-cons comparison-reveal">

                    <img
                        src={IconYellow}
                        alt="HOMYS icon"
                        className="comparison-page-icon"
                    />

                    <p>
                        Showing the pros & cons of these 2 homes
                    </p>

                </div>

                {/* HOME 2 */}
                <div className="home-comparison-card comparison-reveal">

                    <img
                        src={PexelsLwh}
                        alt="Home 2"
                        className="pexels-lwh-img"
                    />

                    <div className="home-details">

                        <h3>Pros:</h3>
                        <ul>
                            <li>Modern architectural design.</li>
                            <li>Large glass windows.</li>
                            <li>Contemporary balconies.</li>
                        </ul>

                        <h3>Cons:</h3>
                        <ul>
                            <li>Less visible greenery.</li>
                            <li>Glass surfaces may require frequent cleaning.</li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ComparisonPage
