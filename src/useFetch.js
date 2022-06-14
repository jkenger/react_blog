import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {

        const fetchController = new AbortController()
        
        const signal = fetchController.signal
        
        setTimeout(() => {
            fetch(url, {signal: signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error('cannot fetch data')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('aborted')
                    } else {
                        setIsPending(false)
                        setError(err.message)
                    }
                })
        }, 1000); return ()=> fetchController.abort();
    }, [url])


    return { data, isPending, error }
}

export default useFetch;