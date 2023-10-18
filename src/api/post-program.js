export async function postProgram(programData) {
    const url = `${import.meta.env.VITE_API_URL}/programs`;
    const userToken = window.localStorage.getItem('token');
    const response = await fetch(url, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + userToken,
        },
        body: JSON.stringify({
            'program_name': programData.program_name ,
            'location': programData.location,
            'intake': programData.intake,
            'description': programData.description,
            'image': programData.image,
            'status': programData.status,
            'date_start': programData.date_start,
            'date_end': programData.date_end,
            'application_date_start': programData.application_date_start
        }),
    });
    if (!response.ok) {
        const fallbackError = `Error fetching programs`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        let errorMessage = data?.detail ?? fallbackError;
        errorMessage = `${response.status} - ${errorMessage}`;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default postProgram