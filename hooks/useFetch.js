import { useState, useCallback } from 'react';

export default function useFetch(url, body = null, method = 'GET') {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const options = {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body ? JSON.stringify(body) : null,
            };

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const result = await response.json();
            setData(result);
            return result; // Return the fetched data
        } catch (err) {
            setError(err);
            throw err; // Rethrow the error so it can be caught in calling functions
        } finally {
            setLoading(false);
        }
    }, [url, body, method]);

    return { data, loading, error, fetchData };
}