import { useState } from 'react'
import LandingPage from './LandingPage.jsx'
import AdavantagesPage from './AdvantagesPage.jsx'

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
        </div>
    )
}

export default App

