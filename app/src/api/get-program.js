async function getProgram(programId) {
  const url = `${import.meta.env.VITE_API_URL}/programs/${programId}`;
  const response = await fetch(url, { method: "GET"});

  if (!response.ok) {
    const fallbackError = `Error fetching program with id ${programId}`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error (errorMessage); 
  }

  return await response.json();
}

export default getProgram;