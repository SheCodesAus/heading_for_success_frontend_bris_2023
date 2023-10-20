export async function postApplicant() {
    const url = `${import.meta.env.VITE_API_URL}/applicant`;
    const userToken = window.localStorage.getItem('token');
    const response = await fetch(url, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + userToken,
        },
        body: JSON.stringify({
            'first_name': formData.first_name,
            'last_name': formData.last_name,
            'email': formData.email,
            'age': formData.age,
            'contact_mobile': formData.contact_mobile,
            'home_city': formData.home_city,
            'pronouns': formData.pronouns,
            'qualities': formData.qualities,
            'location': formData.location, 
            'reason': formData.reason,
            'previous_education': formData.previous_education,
            'work_experience': formData.work_experience,
            'currently_employed': formData.currently_employed,
            "current_employer": formData.current_employer,
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