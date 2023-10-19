import { useState, useEffect } from 'react';
import { getApplicantDetails }  from '../api/get-applicant-details';

export function useApplicantDetails(id) {
    const [applicantDetail, setApplicantDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        getApplicantDetails(id)
            .then((applicantDetail) => {
                setApplicantDetail(applicantDetail);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);
    return { applicantDetail, isLoading, error, setApplicantDetail };
}







