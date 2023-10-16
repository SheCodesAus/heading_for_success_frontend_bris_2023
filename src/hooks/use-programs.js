import { useState, useEffect } from 'react';
import { getPrograms } from '../api/get-all-programs';

export function usePrograms() {
    const [allPrograms, setAllPrograms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        getPrograms()
            .then((allPrograms) => {
                setAllPrograms(allPrograms);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);
    return { allPrograms, isLoading, error, setAllPrograms };
}







