export async function getProgramDetails(id) {
    const url = `${import.meta.env.VITE_API_URL}/program/${id}`;
    const response = await fetch(url, { method: 'GET' });
    
    if (!response.ok) {
        const fallbackError = `Error fetching program with id ${id}`;

        const data = await response.json().catch(() => {

            throw new Error(fallbackError);
        });

        let errorMessage = data?.detail ?? fallbackError;
        
        errorMessage = `${response.status} - ${errorMessage}`; 
        
        throw new Error(errorMessage);
    }

    return await response.json();
}
