import { useState, useEffect } from 'react';
import { getProgramDetails } from '../api/get-program-details';

export function useProgramDetails(id) {
    const [programDetail, setProgramDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        getProgramDetails(id)
            .then((programDetail) => {
                setProgramDetail(programDetail);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);
    return { programDetail, isLoading, error, setProgramDetail };
}







