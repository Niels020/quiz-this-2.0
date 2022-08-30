function RoundDisplay({ currentRound, numberOfRounds, timer, score }) {
    return (
        <section>
            <div className='roundDisplay--info-container'>
                <h1>score: {score}</h1>
                <h3>{`Round: ${currentRound} / ${numberOfRounds}`}</h3>
            </div>
            <h1 className='roundDisplay--timer'>{timer}</h1>
        </section>
    )
}

export default RoundDisplay