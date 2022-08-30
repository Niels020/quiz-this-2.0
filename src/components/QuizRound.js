import RoundDisplay from './RoundDisplay'
import RoundQnA from './RoundQnA'
import RoundButtons from './RoundButtons'
import ScoreScreen from './ScoreScreen'
import useTimer from '../hooks/useTimer'
import useWindowDimensions from '../hooks/useWindowDimentions'
import { useState } from 'react'
import Confetti from 'react-confetti'

function QuizRound(
    {
        score,
        updateScore,
        difficulty,
        numberOfRounds,
        currentRound, 
        answersEl, 
        question, 
        selectAnswer,
        getNextRound, 
        returnToStart 
    }) {

    const { timer, startTimer, resetTimer, pauseTimer } = useTimer()
    const { height, width } = useWindowDimensions()

    const [isRoundStarted, setIsRoundStarted] = useState(true)
    const [isGameEnded, setIsGameEnded] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(0)
    const isOutOfTime = isRoundStarted && timer === 0
    const isLastRound = currentRound === numberOfRounds

    const isCorrectSelected = answersEl.some(el => {
        return el.selected && el.correct
    })

    const isAnySelected = answersEl.some(el => {
        return el.selected
    })

    

    isOutOfTime && checkAnswers()

    function checkAnswers() {
        pauseTimer()
        setIsRoundStarted(false)
        isCorrectSelected && updateScore(10)
        setTimeRemaining(prev => prev + timer)
    }

    function startNextRound() {
        if(isLastRound) {
            setIsGameEnded(true)
        } else {
            resetTimer()
            startTimer()
            setIsRoundStarted(true)
            getNextRound()
        }
        
    }

    function startConfetti() {
        if(isCorrectSelected) {
            return (
                <Confetti 
                    width={width}
                    height={height}
                />
            )
        }
    }


    return (
        <>
        {
            isGameEnded ? 
                <ScoreScreen
                    score={score}
                    timeRemaining={timeRemaining}
                    numberOfRounds={numberOfRounds}
                    difficulty={difficulty}
                    returnToStart={returnToStart}
                />
            :
                <main className='container round'>

                    {!isRoundStarted && startConfetti()}

                    <RoundDisplay 
                        currentRound={currentRound}
                        numberOfRounds={numberOfRounds}
                        timer={timer}
                        score={score}

                    />
                    <RoundQnA 
                        answersEl={answersEl}
                        question={question}
                        isRoundStarted={isRoundStarted}
                        selectAnswer={selectAnswer}
                    />
                    <RoundButtons
                        isAnySelected={isAnySelected}
                        isRoundStarted={isRoundStarted}
                        checkAnswers={checkAnswers}
                        startNextRound={startNextRound}
                        returnToStart={returnToStart}
                        isLastRound={isLastRound}
                    />
                </main>
        }
        </>    
    )
}

export default QuizRound