import { useNavigate } from "react-router-dom";
import { useState } from "react";
import postNewUser from "../../api/post-user";
import postLogin from "../../api/post-login";

function NewApplicantForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formIsInvalid, setFormIsInvalid] = useState("");
  const [userDetails, setUserDetails] = useState({

    first_name: "",
    last_name: "",
    email: "",
    age: "",
    mobile: "",
    home_city: "",
    pronouns: "",
    qualities: "",
    location: "",
    reason: "",
    previous_education: "",
    work_experience: "",
    currently_employed: "",
    biography: "",
    gender_eligible: "",
    resume: "",
    // program_id: "",
    // status: "",
    // scholarship_id: "",

  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormIsInvalid("");
    setErrorMessage("");
    //what do these parameters need to be? As we won't be using a logged in user with authorisation etc?
    // if (userDetails.username && userDetails.password && userDetails.email) {
      postNewUser(
        userDetails.first_name,
        userDetails.last_name,
        userDetails.email,
        userDetails.age,
        userDetails.mobile,
        userDetails.home_city,
        userDetails.pronouns,
        userDetails.qualities,
        userDetails.location,
        userDetails.reason,
        userDetails.previous_education,
        userDetails.work_experience,
        userDetails.currently_employed,
        userDetails.biography,
        userDetails.gender_eligible,
        userDetails.resume,
        // userDetails.program_id,
        // userDetails.status,
        // userDetails.scholarship_id,


      )
        // .then(() => {
        //   postLogin(userDetails.username, userDetails.password).then(
        //     (response) => {
        //       window.localStorage.setItem("token", response.token);
        //       navigate("/");
        //     }
        //   );
        // })
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
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="last_name">Surname:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Surname"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" >Email</label>
        <input
          type="email" //should this be email? or just text field?
          id="email"
          name="email"
          placeholder="email@address.com"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age"> Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          placeholder="age"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="home_city">Home City:</label>
        <input
          type="text"
          id="home_city"
          name="home_city"
          placeholder="Home City"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="pronouns"> pronouns:</label>
        <input
          type="text"
          id="pronouns"
          name="pronouns"
          placeholder="pronouns"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="qualities">qualities:</label>
        <input
          type="text"
          id="qualities"
          name="qualities"
          placeholder=" “Bring unique perspective to the community”"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">location :</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="location "
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="reason">reason:</label>
        <input
          type="text"
          id="reason"
          name="reason"
          placeholder="reason"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="previous_education">previous education:</label>
        <input
          type="text"
          id="previous_education"
          name="previous_education"
          placeholder="What is your previous education?"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="work_experience"> work experience:</label>
        <input
          type="text"
          id="work_experience"
          name="work_experience"
          placeholder=" work experience"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="currently_employed">currently employed:</label>
        <input
          type="boolean" //should this be boolean? how do i add a toggle between yes/no?
          id="currently_employed"
          name="currently_employed"
          placeholder="currently employed?"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="current_employer">current employer:</label>
        <input
          type="text"
          id="current_employer"
          name="current_employer"
          placeholder="current employer"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="biography">biography:</label>
        <input
          type="text"
          id="biography"
          name="biography"
          placeholder="biography"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender_eligible">gender eligible:</label>
        <input
          type="boolean" //should this be boolean? how do i add a toggle between yes/no?
          id="gender_eligible"
          name="gender_eligible"
          placeholder="true "
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="resume">resume:</label>
        <input
          type="url" //should this be url or string?
          id="resume"
          name="resume"
          placeholder="https://www.linkedin.com"
          onChange={handleChange}
        />
      </div>

      {
      /* 
        “program_id”: 1, int
        “status”: “Approved”, string
        “scholarship_id”: 1 int
        */}




      <button type="submit" className="button" onClick={handleSubmit}>
        Submit application
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

export default NewApplicantForm;
