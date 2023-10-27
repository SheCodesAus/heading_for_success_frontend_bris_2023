export async function putProgram(id, program_name, location, intake, description, image, date_start, date_end, application_date_start, application_date_end ) {
    const url = `${import.meta.env.VITE_API_URL}/program/${id}`;
    const userToken = window.localStorage.getItem('token');

    const response = await fetch(url, { method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + userToken,               
        },
        body: JSON.stringify({
            "program_name": program_name,
            "location": location,
            "intake": intake,
            "description": description,
            "image": image,
            // "status": status,
            "date_start": date_start,
            "date_end": date_end,
            "application_date_start": application_date_start,
            "application_date_end": application_date_end,
        }),
    });

    if (!response.ok) {
        const fallbackError = `Error trying to update program`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}