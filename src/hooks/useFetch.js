import { useState, useEffect } from "react";

export default function useFetch(url, option) {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, option);
                const json = await res.json();
                setResult(json);
                setLoading(false);
            } catch (error) {
                setError(error) ;
                setLoading(false);

            }
        })();

    }, [url,option])
    return { loading, result, error }
}