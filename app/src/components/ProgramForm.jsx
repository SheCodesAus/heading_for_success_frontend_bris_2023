import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ProgramForm() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [formIsInvalid, setFormIsInvalid] = useState("");
    const [programDetails, setProgramDetails] = useState({
        program_id: "",
        program_name: "",
        location: "",
        intake: "",
        description: "",
        image: "",
        status: "open", // Default value for status
        date_start: "",
        date_end: "",
        application_date_start: "",
        application_date_end: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProgramDetails((prevDetails) => ({
            ...prevDetails,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormIsInvalid("");
        setErrorMessage("");
        if (
            programDetails.program_name &&
            programDetails.location &&
            programDetails.intake
        ) {
            // Assuming you have a postProgram function for making the API request
            postProgram(programDetails)
                .then((response) => {
                    navigate(`/program/${response.id}/`);
                })
                .catch((error) => {
                    setErrorMessage(error.message.split(","));
                });
        } else {
            setFormIsInvalid("Please complete required fields.");
        }
    };

    return (
        <form className="form">
            <div>
                <label htmlFor="program_name">Program Name:</label>
                <input
                    type="text"
                    id="program_name"
                    name="program_name"
                    placeholder="Program Name"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="intake">Intake:</label>
                <input
                    type="text"
                    id="intake"
                    name="intake"
                    placeholder="Intake"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="image">Image:</label>
                <input
                    type="url"
                    id="image"
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    value={programDetails.status}
                    onChange={handleChange}
                >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                </select>
            </div>

            <div>
                <label htmlFor="date_start">Date Start:</label>
                <input
                    type="date"
                    id="date_start"
                    name="date_start"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="date_end">Date End:</label>
                <input
                    type="date"
                    id="date_end"
                    name="date_end"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="application_date_start">Application Date Start:</label>
                <input
                    type="date"
                    id="application_date_start"
                    name="application_date_start"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="application_date_end">Application Date End:</label>
                <input
                    type="date"
                    id="application_date_end"
                    name="application_date_end"
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="button" onClick={handleSubmit}>
                Create Program
            </button>

            <div className="error-message">
                {Object.values(errorMessage).map((error, key) => (
                    <p key={key}>Error: {error}</p>
                ))}
            </div>


            <p className="error-message">{formIsInvalid}</p>
        </form>
    );
}

export default ProgramForm;
