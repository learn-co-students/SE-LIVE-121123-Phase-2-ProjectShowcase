import React, { useState } from "react";

const initialState = {
  name: "",
  about: "",
  phase: "",
  link: "",
  image: "",
};

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState(initialState); // create state to put the form under React control
  // const { name, about, phase, link, image} = formData // you could optionally destructure these values if you wanted

  function handleChange(e) {
    // const {name, value} = e.target // more optional destructuring for your convenience
    setFormData((formData) => {
      return {
        ...formData, // copies all the key/values in formData so we don't lose them
        [e.target.name]: e.target.value, // uses the [computed value] of the name of the input to overwrite the correct value in formData
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddProject(formData); // send the user-entered data from state to ProjectsContainer
    setFormData(initialState); // reset the form with empty fields
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name} // connect this input to the related data in state
          onChange={handleChange} // make this input able to update state
          required
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          value={formData.phase}
          onChange={handleChange}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
