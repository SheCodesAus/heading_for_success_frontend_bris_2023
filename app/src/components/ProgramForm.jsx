import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import postProgram from "../../api/post-program";

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
    status: "",
    image: "",
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
        postProgram(
            programDetails.description,
            programDetails.image,
            programDetails.status,
            programDetails.date_start,
            programDetails.date_end,
            programDetails.application_date_start,
            programDetails.application_date_end,

        )
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
        <label htmlFor="program_name" 
        className={formIsInvalid ? "error-message" : ""}>
            Program Name
            <span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
            type="text"
            id="program_name"
            name="program_name"
            placeholder="Program Name"
            onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor="location" 
        className={formIsInvalid ? "error-message" : ""}>
            location
            <span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
            type="text"
            id="location"
            name="location"
            placeholder="location "
            onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor="intake" 
        className={formIsInvalid ? "error-message" : ""}>
            intake
            <span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
            type="text"
            id="intake"
            name="intake"
            placeholder="intake "
            onChange={handleChange}
        />
        </div>

        <div>
        <label
            htmlFor="description"
            className={formIsInvalid ? "error-message" : ""}>
            Description
            {/* <span className={formIsInvalid ? "" : "hidden"}>*</span>: */}
        </label>
        <textarea
            id="description"
            name="description"
            placeholder="?"
            onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor="image">Image:</label>
        <input
            type="url"
            id="image"
            name="image"
            placeholder=""
            onChange={handleChange}
        />
        </div>
        {/* location: "",
    intake: "",
    description: "",
    image: "",
    status: "",
    image: "",
    date_start: "",
    date_end: "",
    application_date_start: "",
    application_date_end: "", */}

<div>
        <label htmlFor="status" 
        className={formIsInvalid ? "error-message" : ""}>
            status
            <span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
            type="text" //unsure!?
            id="status"
            name="status"
            placeholder="status "
            onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor="date_start" 
        className={formIsInvalid ? "error-message" : ""}>
            date start
            <span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
            type="datetime" //CHECK PLEASE?
            id="date_start"
            name="date_start"
            placeholder="date start "
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="date_end" 
        className={formIsInvalid ? "error-message" : ""}>
            date end
            <span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
            type="datetime" //????
            id="date_end"
            name="date_end"
            placeholder="date end "
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="application_date_start" 
        className={formIsInvalid ? "error-message" : ""}>
            application_date_start
            <span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
            type="datetime"
            id="application_date_start"
            name="application_date_start"
            placeholder="application_date_start "
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="application_date_end" 
        className={formIsInvalid ? "error-message" : ""}>
            application_date_end
            <span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
            type="datetime"
            id="application_date_end"
            name="application_date_end"
            placeholder="application_date_end "
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
