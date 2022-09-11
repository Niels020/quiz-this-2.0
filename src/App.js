import React, { useState } from 'react'
import Quiz from './components/Quiz'
import StartScreen from './components/StartScreen'
import useFetch from './hooks/useFetch'
import { shuffle } from './utils'


export default function App() {
    const NUMBER_OF_ROUNDS = 10
    const TIME_EACH_ROUND = 10

    const [startGame, setStartGame] = useState(false)
    const [startSettings, setStartSettings] = useState({ difficulty: '', category: '' })

    const optionsUrl = `${startSettings.difficulty}${startSettings.category}`
    const url = `https://opentdb.com/api.php?amount=${NUMBER_OF_ROUNDS}${optionsUrl}&type=multiple`

    const { data, isLoading, isError } = useFetch(url, startGame)


    function handleStartSettings(event) {
        setStartSettings(prevStartSettings => {
            return {
                ...prevStartSettings,
                [event.target.name]: event.target.value
            }
        })
    }

    function formatData(arr) {
        return arr.map(el => {
            return {
                question: el.question,
                correct: el.correct_answer,
                allAnswers: shuffleAnswers(el.incorrect_answers, el.correct_answer)
            }
        })
    }


    function shuffleAnswers(incorrect, correct) {
        const answers = incorrect.concat(correct)
        const shuffledAnswers = shuffle(answers)
        return shuffledAnswers
    }


    function returnToStart() {
        setStartGame(false)
        setStartSettings({ difficulty: '', category: '' })
    }

    if(!startGame) {

        return (
            <div>
                <StartScreen 
                    startQuiz={() => setStartGame(true)}
                    handleStartSettings={handleStartSettings}
                    startSettings={startSettings}
                    numberOfRounds={NUMBER_OF_ROUNDS}
                    timeEachRound={TIME_EACH_ROUND}
                />
            </div>
        )
    } else {

        if(isError) {
            return <div>error. please refresh</div>
        } else if(isLoading) {
            return <div>loading...</div>
        } else {
            return (

                <div>
                    <Quiz
                        data={formatData(data.results)}
                        returnToStart={returnToStart}
                        difficulty={startSettings.difficulty}
                        timeEachRound={TIME_EACH_ROUND}
                        numberOfRounds={NUMBER_OF_ROUNDS}
                    />
                </div>

            )
        }
    }
}
