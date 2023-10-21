import { useState, useEffect } from 'react';
import { getProgramDetails } from '../api/get-program-details';

export function useProgramDetails(id) {
    const [programDetail, setProgramDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [scholarshipAssigned, setScholarshipAssigned] = useState(null);
    
    const newItems = [];

    const addScholarshipItem = (scholarshipData, assignedCount) => {
        
        return {
            id: scholarshipData.id,
            organization: scholarshipData.organization,
            number_available: scholarshipData.number_available,
            assigned_count: assignedCount,
            remaining_count: scholarshipData.number_available - assignedCount,
            is_assigned: false
          };
         
    };

    useEffect(() => {
        getProgramDetails(id)
            .then((programDetail) => {
                setProgramDetail(programDetail);
                setIsLoading(false);

                const tempScholarshipAssigned =  programDetail.scholarship.map((scholarshipData, key) => {
                    let filteredAssigned = programDetail.applicant.filter((applicant) => applicant.scholarship === scholarshipData.id);
                    let assignedCount = filteredAssigned.length;    
                    return addScholarshipItem(scholarshipData, assignedCount);                   
                })    
                setScholarshipAssigned(tempScholarshipAssigned);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []); // to stop rendering twice

    
    return { programDetail, isLoading, error, setProgramDetail, scholarshipAssigned, setScholarshipAssigned };
}

