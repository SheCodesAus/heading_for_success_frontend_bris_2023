export async function postUser(username, password, first_name, last_name, email, image ) {
    const url = `${import.meta.env.VITE_API_URL}/user`;
    const userToken = window.localStorage.getItem('token');

    const response = await fetch(url, { method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + userToken,
        },
        body: JSON.stringify({
            'username': username,
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'image': image,
            'password': password,
        }),
    });

    if (!response.ok) {
        const fallbackError = `Error trying to signup`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        let  errorMessage = data?.detail ?? fallbackError;
        errorMessage = Object.values(data)[0].toString();
        throw new Error(errorMessage);
    }

    return await response.json();
}