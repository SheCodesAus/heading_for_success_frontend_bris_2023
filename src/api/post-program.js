export async function postProgram(  program_name,
                                    location,
                                    intake,
                                    description,
                                    image,
                                    date_start, 
                                    date_end,
                                    application_date_start,
                                    application_date_end
                                ) {
    const url = `${import.meta.env.VITE_API_URL}/program`;
    const userToken = window.localStorage.getItem('token');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + userToken,
        },
        body: JSON.stringify({
            'program_name': program_name ,
            'location': location,
            'intake': intake,
            'description': description,
            'image': image,
            'date_start': date_start,
            'date_end': date_end,
            'application_date_start': application_date_start,
            'application_date_end': application_date_end,
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

export default postProgram;