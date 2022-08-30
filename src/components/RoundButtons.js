function RoundButtons(
    { 
        isAnySelected, 
        isRoundStarted, 
        checkAnswers, 
        startNextRound, 
        returnToStart,
        isLastRound
        }) {


    return (
        <section className='roundButtons-container'>
            {isRoundStarted ? 
                <button 
                    className='roundButton button' 
                    disabled={!isAnySelected} 
                    onClick={checkAnswers}
                >check answers
                </button>
            :
                <button 
                    className='roundButton button' 
                    onClick={startNextRound}
                >{isLastRound ? 'check score' : 'next round'}
                </button>
            }
            <button 
                className='roundButton button' 
                onClick={returnToStart}
            >return to start
            </button>
        </section>
    )
}

export default RoundButtons