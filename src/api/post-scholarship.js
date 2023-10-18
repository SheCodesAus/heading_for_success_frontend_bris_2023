export async function postScholarship() {
    const url = `${import.meta.env.VITE_API_URL}/scholarship`;
    const userToken = window.localStorage.getItem('token');
    const response = await fetch(url, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + userToken,
        },
        body: JSON.stringify({
            'organization': scholarshipData.organization,
            'contact_name': scholarshipData.contact_name,
            'contact_email': scholarshipData.contact_email,
            'contact_mobile': scholarshipData.contact_mobile,
            'scholarship_amount': scholarshipData.scholarship_amount,
            'number_available': scholarshipData.number_available
        }),
    });
    if (!response.ok) {
        const fallbackError = `Error posting Scholarship`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        let errorMessage = data?.detail ?? fallbackError;
        errorMessage = `${response.status} - ${errorMessage}`;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default postScholarship