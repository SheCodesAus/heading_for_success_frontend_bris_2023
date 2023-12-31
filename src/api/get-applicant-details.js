export async function getApplicantDetails(id) {
    const url = `${import.meta.env.VITE_API_URL}/applicant/${id}`;
    const userToken = window.localStorage.getItem('token');

    const response = await fetch(url, { method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + userToken,               
        }, 
    });
    
    if (!response.ok) {
        const fallbackError = `Error fetching application details id ${id}`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        let errorMessage = data?.detail ?? fallbackError;

        errorMessage = `${response.status} - ${errorMessage}`; 
        
        throw new Error(errorMessage);
    }

    return await response.json();
}

