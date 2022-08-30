import React, { useState, useEffect } from 'react'
import QuizRound from './QuizRound'



function Quiz({ data, returnToStart, difficulty, numberOfRounds }) {
    const [dataIndex, setDataIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [question, setQuestion] = useState('')
    const [answersEl, setAnswersEl] = useState([])

    useEffect(() => {
        function getRoundData(i) {
            const round = data[i]

            setQuestion(round.question)
            setAnswersEl(formatAnswers(round.allAnswers, round.correct))
        } 
        getRoundData(dataIndex)
    }, [data, dataIndex])
     
    
    function formatAnswers(answers, correct) {
        const answerFormatted = answers.map((el, index) => {
            return {
                id: index,
                answer: el,
                selected: false,
                correct: el === correct
            }
        })
        return answerFormatted
    }

    
    function getNextRound() {
        const lastRound = numberOfRounds
        if(dataIndex !== lastRound) {
            setDataIndex(prev => prev + 1)
        } 
    }


    function selectAnswer(id) {
        setAnswersEl(prev => prev.map(el => {
            return {
                ...el,
                selected: id === el.id ? !el.selected : false
            }
        }))
    }

    
    function updateScore(num) {
        setScore(prev => prev + num)
    }



    return(
        <>
            <QuizRound
                score={score}
                updateScore={updateScore}
                difficulty={difficulty}
                numberOfRounds={numberOfRounds}
                currentRound={dataIndex + 1}
                question={question}
                answersEl={answersEl}
                selectAnswer={selectAnswer}
                getNextRound={getNextRound}
                returnToStart={returnToStart}
            />
        </>
    )
}

export default Quiz