import React, { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";

export default function ProjectContainer() {
  const [projects, setProjects] = useState([]); // moved up from ProjectList

  const loadProjects = () => {
    // also moved up from ProjectList
    fetch("http://localhost:4000/projects") // we will learn a better way to fetch in React
      .then((res) => res.json())
      .then((projects) => setProjects(projects)); // but this gives a chance to practice inverse data flow
  };

  return (
    <div>
      <ProjectForm />
      <ProjectList
        projects={projects} // pass down so it can be filtered by searchQuery
        onLoadProjects={loadProjects} // pass down to click handler fn
      />
    </div>
  );
}
