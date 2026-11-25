function ProblemPage(){
    return(
        <div className="problem-page-container">
            <h1 className="problem-title">Same Problem Right?</h1>

            <div className="problem-tags">
                <span className="problem-tag">Empty Room</span>

                <span className="problem-tag">Endless calls</span>

                <span className="problem-tag">Wrong people.</span>
            </div>

            <h2 className="old-way-title">Old Way</h2>

            <div className="old-way-flow">
                <p className="old-way-step">You paid for boost in portals</p>
                <p className="flow-arrow">⟶</p>
                <p className="old-way-step">it shows your property to people</p>
                <p className="flow-arrow">⟶</p>
                <p className="old-way-step">getting lots of random calls</p>
            </div>

            <h2 className="problem-highlight">But your room? still <span className="highlight problem-empty">‘Empty’</span></h2>
        </div>
    )
}
export default ProblemPage