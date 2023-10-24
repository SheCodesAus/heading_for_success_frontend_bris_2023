export async function postScholarship(formData) {
    const url = `${import.meta.env.VITE_API_URL}/scholarship`;
    const response = await fetch(url, { method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + userToken,
        },
        body: JSON.stringify({
            "organization": formData.organization,
            "contact_person": formData.contact_person,
            "contact_email": formData.contact_email,
            "contact_mobile": formData.contact_mobile,
            "scholarship_amount": formData.scholarship_amount,
            "number_available": formData.number_available,
            "program": formData.id
        }),
    });
    if (!response.ok) {
        const fallbackError = `Error posting scholarship`;
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