
import { useEffect, useRef } from "react"
import SummaryBg from "./assets/summary-bg.jpg"

function SummaryPage() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add("is-visible")
                    observer.unobserve(section)
                }
            },
            {
                threshold: 0.2
            }
        )

        observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <div className="summary-page-container" ref={sectionRef}>
            <img
                src={SummaryBg}
                alt="Background Image"
                className="summary-bg"
            />

            <p className="summary-info">
                We aren’t just an ordinary Ai tool in Ai Bubble
            </p>

            <h2 className="summary-heading">
                We are making the experience of finding your
                <br /> next home smoother
            </h2>

            <div className="summary-banner">
                <p>
                    Forget the old system of finding rent, The new era of Real Estate
                    <br /> begins.
                </p>
            </div>
        </div>
    )
}

export default SummaryPage
