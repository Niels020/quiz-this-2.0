import { useState, useEffect } from 'react'

function useTimer(startingTime = 10) {
    const [timer, setTimer] = useState(startingTime)
    const [started, setStarted] = useState(true)

    useEffect(() => {
        let interval
        
        if(timer === 0) {
            setStarted(false)
        }

        if(started) {
            interval = setInterval(() => {
                setTimer(prev => prev - 1)}, 1000)
        }

        return () => {clearInterval(interval)}
    }, [timer, started])


    const startTimer = () => setStarted(true)

    const resetTimer = () => setTimer(startingTime)

    const pauseTimer = () => setStarted(false)


    return {
        timer, started, startTimer, resetTimer, pauseTimer
    }
}

export default useTimer