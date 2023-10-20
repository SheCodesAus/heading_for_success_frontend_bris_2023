import { useState, useEffect } from 'react';
import { getProgramDetails } from '../api/get-program-details';

export function useProgramDetails(id) {
    const [programDetail, setProgramDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [scholarshipAssigned, setScholarshipAssigned] = useState([]);
    
    const newItems = [];

    const addScholarshipItem = (scholarshipData, assignedCount) => {
        
        const newItem = {
            id: scholarshipData.id,
            organization: scholarshipData.organization,
            number_available: scholarshipData.number_available,
            assigned_count: assignedCount,
            remaining_count: scholarshipData.number_available - assignedCount,
            is_assigned: false
          };

        newItems.push(newItem);
         
        // setScholarshipAssigned((prevScholarshipAssigned) => [
        // ...prevScholarshipAssigned,
        // newItem,
        // ]);
    };

    useEffect(() => {
        getProgramDetails(id)
            .then((programDetail) => {
                setProgramDetail(programDetail);
                setIsLoading(false);

                setScholarshipAssigned([]); // had to put this here as this renders twice
                programDetail.scholarship.map((scholarshipData, key) => {
                    let filteredAssigned = programDetail.applicant.filter((applicant) => applicant.scholarship === scholarshipData.id);
                    let assignedCount = filteredAssigned.length;    
                    addScholarshipItem(scholarshipData, assignedCount);
                    // const newItems = [
                    //     ...scholarshipAssigned,
                    //     {
                    //         id: scholarshipData.id,
                    //         number_available: scholarshipData.number_available,
                    //         assigned_count: assignedCount,   
                    //         remaining_count: scholarshipData.number_available - assignedCount,  
                    //         isAssigned: false
                    //     }
                    // ];
                    // setScholarshipAssigned(newItems);
                    
                })    
                setScholarshipAssigned(newItems);
                console.log("render in  hook)")
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [scholarshipAssigned.id]);
    return { programDetail, isLoading, error, setProgramDetail, scholarshipAssigned, setScholarshipAssigned };
}

