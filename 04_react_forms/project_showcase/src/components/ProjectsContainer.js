import { useState } from "react";

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  };

  const addProject = (newProject) => {
    console.log("🚀 ~ addProject ~ newProject:", newProject);
    newProject.id = projects[projects.length - 1].id + 1; // since we're using id for the key prop when rendering each <ProjectListItem />, we can create an id for new projects to avoid a key list error
    setProjects([...projects, newProject]); // add new project to state; use spread operator (...) to copy old array contents into new array
  };

  return (
    <>
      <ProjectForm
        onAddProject={addProject} // pass callback down to form which will update state
      />
      <ProjectList onLoadProjects={loadProjects} projects={projects} />
    </>
  );
};

export default ProjectsContainer;
