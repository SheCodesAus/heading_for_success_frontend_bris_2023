export async function getApplicants() {
    const url = `${import.meta.env.VITE_API_URL}/applicant`;
    const userToken = window.localStorage.getItem('token');

    const response = await fetch(url, { method: 'GET' ,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + userToken,
        },
    });
    
    if (!response.ok) {
        const fallbackError = `Error fetching applications`;
        
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        
        const errorMessage = data?.detail ?? fallbackError;

        throw new Error(errorMessage);
    }

    return await response.json();
}
