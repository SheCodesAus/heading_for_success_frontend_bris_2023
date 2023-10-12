import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useProgram from "../../hooks/use-program";
import putProgram from "../../api/put-program";

function ProgramUpdateForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formIsInvalid, setFormIsInvalid] = useState("");
  const [formData, setFormData] = useState({
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

  const { id } = useParams();
  const [program, isLoading, error] = useProgram(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const deleteProgram = (event) => {
    event.preventDefault();
    setFormIsInvalid("");
    setErrorMessage("");
    const confirmation = window.confirm(
      "Are you sure you want to delete this program?"
    );

    if (confirmation) {
      // Assuming you have a putProgram function for making the API request
      putProgram({
        ...formData,
        is_deleted: true,
      })
        .then(() => {
          alert("Program successfully deleted.");
          navigate(`/profile/`);
        })
        .catch((error) => {
          setErrorMessage(error.message.split(","));
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormIsInvalid("");
    setErrorMessage("");

    // You should check if any of the fields have changed and only then submit the update.
    // For example, if any of the following fields have changed:
    // - formData.program_name
    // - formData.location
    // - formData.intake
    // - formData.description
    // - formData.image
    // - formData.status
    // - formData.date_start
    // - formData.date_end
    // - formData.application_date_start
    // - formData.application_date_end

    if (/* Check for changes */) {
      // Assuming you have a putProgram function for making the API request
      putProgram({
        ...formData,
        is_deleted: false,
      })
        .then(() => {
          navigate(`/program/${id}/`);
        })
        .catch((error) => {
          setErrorMessage(error.message.split(","));
        });
    } else {
      setFormIsInvalid("You must change at least one attribute to submit an update.");
    }
  };

  return (
    <form className="form program-update-form">
      <div>
        <label htmlFor="program_name">Program Name:</label>
        <input
          type="text"
          id="program_name"
          name="program_name"
          defaultValue={program.program_name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={program.location}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="intake">Intake:</label>
        <input
          type="text"
          id="intake"
          name="intake"
          defaultValue={program.intake}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue={program.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="url"
          id="image"
          name="image"
          defaultValue={program.image}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={formData.status}
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
          defaultValue={program.date_start}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="date_end">Date End:</label>
        <input
          type="date"
          id="date_end"
          name="date_end"
          defaultValue={program.date_end}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="application_date_start">Application Date Start:</label>
        <input
          type="date"
          id="application_date_start"
          name="application_date_start"
          defaultValue={program.application_date_start}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="application_date_end">Application Date End:</label>
        <input
          type="date"
          id="application_date_end"
          name="application_date_end"
          defaultValue={program.application_date_end}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="button" onClick={handleSubmit}>
        Update Program
      </button>

      <button
        type="button"
        id="is_deleted"
        className="delete-button"
        onClick={deleteProgram}
      >
        Delete Program
      </button>

      <div className="error-message">
        {errorMessage && <p>Error: {errorMessage}</p>}
      </div>

      <p className="error-message">{formIsInvalid}</p>
    </form>
  );
}

export default ProgramUpdateForm;
