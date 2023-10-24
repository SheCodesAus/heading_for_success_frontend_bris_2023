import { useState, useEffect } from 'react';
import { getScholarship } from '../api/get-scholarship';

export function useScholarship() {
    const [scholarship, setScholarship] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        getScholarship()
            .then((scholarship) => {
                setScholarship(scholarship);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);
    return { scholarship, isLoading, error, setScholarship };
}







