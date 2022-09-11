import { useState, useEffect } from 'react'

function useFetch(url, startGame) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)

    

    useEffect(() => {
        async function getData() {
            setIsLoading(true)
            setIsError(false)

            try{
                const response = await fetch(url)
                const result = await response.json()
                setIsLoading(false)

                if(result.response_code !== 0) {
                    throw Error
                }

                setData(result)
            } catch(error) {
                setIsError(true)
            }  
        }

        getData()
        
    }, [url, startGame])

    return { data, isLoading, isError }
}

export default useFetch