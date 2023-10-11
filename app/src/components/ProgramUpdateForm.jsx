import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
// import useProgram from "../../hooks/use-program";
// import putProgram from "../../api/put-program";

function ProgramUpdateForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formIsInvalid, setFormIsInvalid] = useState("");
  const [formData, setFormData] = useState("");
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
    setFormData((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const deleteProgram = (event) => {
    event.preventDefault();
    setFormIsInvalid("");
    setErrorMessage("");
    const confirmation = confirm(
      "Are you sure you want to delete this program?"
    );

    if (confirmation) {
      program.is_deleted = true;
      putProgram(
        // formData.title,
        // formData.description,
        // formData.image,
        // formData.is_open,
        // program.is_deleted
      )
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
    if (
      // formData.title ||
      // formData.description ||
      // formData.image ||
      // formData.is_open
    ) {
      putProject(
        // formData.title,
        // formData.description,
        // formData.image,
        // formData.is_open,
        // program.is_deleted
      )
        .then(() => {
          navigate(`/program/${id}/`);
        })
        .catch((error) => {
          setErrorMessage(error.message.split(","));
        });
    } else {
      setFormIsInvalid("You must change one attribute to submit an update.");
    }
  };

  return (
    <form className="form program-update-form">
      <div>
        <label htmlFor="">**:</label>
        <input
          type="text"
          id=""
          name=""
          defaultValue={program.title}
          onChange={handleChange}
          {...(program.is_open ? {} : { disabled: true })}
        />
      </div>
      
      <img src={program.image}></img>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="url"
          id="image"
          name="image"
          placeholder="https://image"
          defaultValue={program.image}
          onChange={handleChange}
          {...(program.is_open ? {} : { disabled: true })}
        />
      </div>
      <div>
        <label htmlFor="is_open">Status:</label>
        <select
          id="is_open"
          defaultValue={program.is_open}
          onChange={handleChange}>
          <option value="true">Open</option>
          <option value="false">Closed</option>
        </select>
      </div>
      <button type="submit" className="button" onClick={handleSubmit}>
        Update Program
      </button>
      <button
        type="submit"
        id="is_deleted"
        className="delete-button"
        onClick={deleteProgram}>
        Delete Project
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

export default ProgramUpdateForm;
