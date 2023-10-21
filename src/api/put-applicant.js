export async function putApplicant(id, status, scholarship ) {
    const url = `${import.meta.env.VITE_API_URL}/applicant/${id}`;
    const userToken = window.localStorage.getItem('token');

    const response = await fetch(url, { method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + userToken,               
        },
        body: JSON.stringify({
            // 'gender_eligible': genderEligible,
            'status': status,
            'scholarship': scholarship,
        }),
    });

    if (!response.ok) {
        const fallbackError = `Error trying to update application`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}