import { useState } from 'react'
import LandingPage from './LandingPage.jsx'
import AdavantagesPage from './AdvantagesPage.jsx'
import ComparisonPage from './ComparisonPage.jsx'

function App() {
    const [chatFinished, setChatFinished] = useState(false)

    return (
        <div className="home-container">
            <LandingPage
                onSequenceComplete={() => setChatFinished(true)}
            />

            <AdavantagesPage
                enabled={chatFinished}
            />
            <ComparisonPage />
        </div>
    )
}

export default App

