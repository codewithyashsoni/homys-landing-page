
import { useEffect, useRef } from 'react'

function AdvantagesPage({ enabled }) {
    const sectionRef = useRef(null)

    useEffect(() => {
        if (!enabled) return

        const section = sectionRef.current
        if (!section) return

        const elements = section.querySelectorAll('.reveal-item')

        if (!('IntersectionObserver' in window)) {
            elements.forEach((element) => {
                element.classList.add('is-visible')
            })
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.12
            }
        )

        elements.forEach((element) => observer.observe(element))

        return () => observer.disconnect()
    }, [enabled])

    const oldPoints = [
        'Fake and outdated homes',
        "After staying 1 month owner says 'No visitors allowed'",
        'After going to check room "No Sunlight", "broken walls but not in photo"',
        'After visiting 3 times owner says "No bachelor allowed"',
        "Owner mentioned in app but after calling 'Need brokerage'",
        "Paying for 30 matches, unlimited fare of visiting home but real match '0'"
    ]

    const newPoints = [
        'Only verified homes, remove properly when the home is booked',
        'Homys will answer your every question before spending hours and monies',
        'Homys will show you exact matches based on your preferences',
        'Homys will show you rating label based verified reviews from previous tenants',
        'Verified only after reporting fake owner account will be permanently banned',
        'Paying after 100% matches only not for 20-50 fake numbers'
    ]

    return (
        <section
            className="advantages-page-container"
            ref={sectionRef}
        >
            <h1 className="advantages-title reveal-item">
                Why Choose Us?
            </h1>

            <div className="comparison-layout">

                <div className="comparison-column old-column">
                    <h2 className="comparison-heading reveal-item">
                        Old System
                    </h2>

                    <div className="old-section">
                        {oldPoints.map((point, index) => (
                            <div
                                className="old-section-para reveal-item"
                                key={index}
                                style={{
                                    '--reveal-delay': `${800 + index * 120}ms`
                                }}
                            >
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="divider"
                    aria-hidden="true"
                ></div>

                <div className="comparison-column new-column">
                    <h2 className="comparison-heading reveal-item">
                        New System - <span className="highlight">"Homys"</span>
                    </h2>

                    <div className="new-section">
                        {newPoints.map((point, index) => (
                            <div
                                className="new-section-para reveal-item"
                                key={index}
                                style={{
                                    '--reveal-delay': `${800 + index * 120}ms`
                                }}
                            >
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AdvantagesPage
