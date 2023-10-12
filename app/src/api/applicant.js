export async function getApplicant() {
    // GET single project id
    const url = `${import.meta.env.VITE_API_URL}/applicant`;
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) {
        const fallbackError = `Error fetching applicant`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        let errorMessage = data?.detail ?? fallbackError;
        errorMessage = `${response.status} - ${errorMessage}`;
        throw new Error(errorMessage);
    }
    return await response.json();
}