export async function deleteScholarship(id) {
    const userToken = window.localStorage.getItem('token');
    const url = `${import.meta.env.VITE_API_URL}/scholarship/${id}`;

    const response = await fetch(url, { method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + userToken,               
        }, 
    });
    
    if (!response.ok) {
        const fallbackError = `Error deleting scholarship with id ${id}`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        let errorMessage = data?.detail ?? fallbackError;
        errorMessage = `${response.status} - ${errorMessage}`; 
        throw new Error(errorMessage);
    }

    return await response.status;
}