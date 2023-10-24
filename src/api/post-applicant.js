export async function postApplicant(formData) {
    const url = `${import.meta.env.VITE_API_URL}/applicant`;
    const response = await fetch(url, { method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'first_name': formData.first_name,
            'last_name': formData.last_name,
            'email': formData.email,
            'age': formData.age,
            'mobile': formData.mobile,
            'home_city': formData.home_city,
            'pronouns': formData.pronouns,
            'qualities': formData.qualities,
            'location': formData.location, 
            'reason': formData.reason,
            'previous_education': formData.previous_education,
            'work_experience': formData.work_experience,
            'currently_employed': formData.currently_employed,
            'biography': formData.biography,
            'gender_eligible': formData.gender_eligible,
            'resume': formData.resume,
        }),
    });
    if (!response.ok) {
        const fallbackError = `Error posting application`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        let errorMessage = data?.detail ?? fallbackError;
        errorMessage = `${response.status} - ${errorMessage}`;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default postApplicant