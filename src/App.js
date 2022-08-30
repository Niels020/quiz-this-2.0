import React, { useState, useEffect } from 'react'
import Quiz from './components/Quiz'
import StartScreen from './components/StartScreen'
import { shuffle } from './utils'


export default function App() {
    const NUMBER_OF_ROUNDS = 3
    const TIME_EACH_ROUND = 10
    const [startGame, setStartGame] = useState(false) //!!!!!!!!
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState([])
    const [startSettings, setStartSettings] = useState({
        difficulty: '',
        category: ''
    })

    function handleStartSettings(event) {
        setStartSettings(prevStartSettings => {
            return {
                ...prevStartSettings,
                [event.target.name]: event.target.value
            }
        })
    }


    useEffect(() => {
        const optionsUrl = `${startSettings.difficulty}${startSettings.category}`

        fetch(`https://opentdb.com/api.php?amount=${NUMBER_OF_ROUNDS}${optionsUrl}&type=multiple`)
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true)
                    setData(res.results)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
            })
    },[startSettings])


    function formatData() {
        return data.map(el => {
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
        setStartSettings({
            difficulty: '',
            category: ''
        })
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

        if(error) {
            return <div>error. please refresh</div>
        } else if(!isLoaded) {
            return <div>loading...</div>
        } else {
            return (

                <div>
                    <Quiz
                        data={formatData(data)}
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
