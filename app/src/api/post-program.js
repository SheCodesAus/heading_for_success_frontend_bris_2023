async function postProgram(title, description, goal, image) {
  const url = `${import.meta.env.VITE_API_URL}/programs/`;
  const token = window.localStorage.getItem("token");
  const body = {
    program_id: "",  // Add the program ID if needed
    program_name: "Your Program Name",
    location: "Program Location",
    intake: "Program Intake",
    description: "Program Description",
    image: "https://your-image-url.com",
    status: "open",  // Or "closed" if it's different
    date_start: "2023-10-01",  // Start date in yyyy-mm-dd format
    date_end: "2023-12-31",    // End date in yyyy-mm-dd format
    application_date_start: "2023-09-15",  // Application start date
    application_date_end: "2023-09-30",    // Application end date
  };

  if (!image) {
    delete body.image;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const fallbackError = `Error creating program`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessages = {
      // goalError: data?.goal,
      imageError: data?.image,
      // detailError: data?.detail,
    };
    if (errorMessages) {
      
      if (
        errorMessages.imageError &&
        errorMessages.imageError.some((error) => error.includes("URL"))
      ) {
        errorMessages.imageError = "Provide a valid link to image.";
      }
      if (
        errorMessages.detailError &&
        errorMessages.detailError.includes("Authentication credentials")
      ) {
        errorMessages.detailError =
          "You must be logged in to create a program.";
      }
      for (let error in errorMessages) {
        if (!errorMessages[error]) {
          delete errorMessages[error];
        }
      }

      const errorMessage = Object.values(errorMessages);
      throw new Error(errorMessage);
    } else {
      const errorMessage = fallbackError;
      throw new Error(errorMessage);
    }
  }
  return await response.json();
}

export default postProgram;
