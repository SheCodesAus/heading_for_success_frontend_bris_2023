import { useState, useEffect } from 'react';
import { getApplicants } from '../api/get-applicants';

export function useApplicant() {
    const [applicant, setApplicant] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        getApplicant()
            .then((applicant) => {
                setApplicant(applicant);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);
    return { applicant, isLoading, error, setApplicant };
}







