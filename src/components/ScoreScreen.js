function ScoreScreen(
    { 
        score, 
        timeRemaining, 
        difficulty, 
        returnToStart, 
        numberOfRounds 
    }) {


    function getTotalScore() {
        const timeRemainingMultiplier = getTimeRemainingMultiplier()
        const difficultyMultiplier = getDifficultyMultiplier()
        const total = score * timeRemainingMultiplier * difficultyMultiplier
        return roundNumber(total)
    }

    function getTimeRemainingMultiplier() {
        const averageTimeRemaining = getTimeRemaining()
        const timeRemainingMultiplier = (averageTimeRemaining / 100) + 1
        return roundNumber(timeRemainingMultiplier)
    }    

    function getTimeRemaining() {
        const averageTimeRemaining = timeRemaining / numberOfRounds
        return roundNumber(averageTimeRemaining)
    }

    function getDifficultyMultiplier() {
        const difficulty = getDifficulty()
        let difficultyMultiplier = 0

        if(difficulty === 'easy') {
            return difficultyMultiplier = 1
        } else if(difficulty === 'medium' || 'all difficulties') {
            return difficultyMultiplier = 1.5
        } else if(difficulty === 'hard') {
            return difficultyMultiplier === 2
        }

        return difficultyMultiplier
    }

    function getDifficulty() {
        if(difficulty.includes('&difficulty=')) {
            return difficulty.replace('&difficulty=', '')
        } else return 'all difficulties'
    }

    function roundNumber(num) {
        return Math.round(num * 100) / 100 
    }

    return (
        <main className='container'>
            <div className='score--container'>
                <h3>time left: {timeRemaining}</h3>
                <h1>score: {score}</h1>
                <h3>Rounds: {numberOfRounds}</h3>
            </div>
            <h2>average time remaining: {getTimeRemaining()}</h2>
            <h2>difficulty: {getDifficulty()}</h2>
            <h3>bonus multipliers:</h3>
            <div className='score--container'>
                <h3>difficulty: {getDifficultyMultiplier()}</h3>
                <h3>time left: {getTimeRemainingMultiplier()}</h3>
            </div>
            <h1>total score: {getTotalScore()}</h1>
            <button
                type='button'
                className='scoreScreen--button button'
                onClick={returnToStart}
                >RETURN TO START
            </button>
        </main>
    )
}

export default ScoreScreen