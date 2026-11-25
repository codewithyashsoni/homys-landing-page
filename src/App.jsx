
import { useState, useCallback } from 'react'

import LandingPage from './LandingPage.jsx'
import AdavantagesPage from './AdvantagesPage.jsx'
import ComparisonPage from './ComparisonPage.jsx'
import SummaryPage from './SummaryPage.jsx'
import Footer from './Components/Footer.jsx'
import ProblemPage from './ProblemPage.jsx'

function App() {
    const [chatFinished, setChatFinished] = useState(false)
    const [advantagesFinished, setAdvantagesFinished] = useState(false)

    const handleAdvantagesComplete = useCallback(() => {
        setAdvantagesFinished(true)
    }, [])

    return (
        <div className="home-container">

            <LandingPage
                onSequenceComplete={() => setChatFinished(true)}
            />

            <AdavantagesPage
                enabled={chatFinished}
                onSequenceComplete={handleAdvantagesComplete}
            />

            {advantagesFinished && <ComparisonPage />}

            <SummaryPage />

            <Footer />

            <ProblemPage />

        </div>
    )
}

export default App
