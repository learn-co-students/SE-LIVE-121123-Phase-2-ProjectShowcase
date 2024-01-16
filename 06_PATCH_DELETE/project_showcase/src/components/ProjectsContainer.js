import { useState, useEffect } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectEditForm from "./ProjectEditForm";
import ProjectList from "./ProjectList";

function ProjectsContainer() {
  const [projects, setProjects] = useState([]);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("")

  
  useEffect(() => {
    let url = "http://localhost:4000/projects";
    if (selectedPhase && searchQuery) {
      url += `?phase=${selectedPhase}&q=${searchQuery}`
    } else if (selectedPhase) {
      url += `?phase=${selectedPhase}`
    } else if (searchQuery) {
      url += `?q=${searchQuery}`
    }
    fetch(url)
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  }, [searchQuery, selectedPhase])

  const onAddProject = (savedProject) => {
    setProjects(projects => [...projects, savedProject]);
  }
  
  const onUpdateProject = (updatedProject) => {
    console.log("🚀 ~ onupdatedProject ~ updatedProject:", updatedProject)
    setProjectToEdit(null);
    // const updatedProjects = projects.map(projectObj => {
    //   if (projectObj.id === updatedProject.id) {
    //     return updatedProject
    //   } else {
    //     return projectObj
    //   }
    // })
    // setProjects(updatedProjects);
    setProjects(projects.map(project => project.id === updatedProject.id ? updatedProject : project));
  };

  const onEditProject = (projectToEdit) => {
    setProjectToEdit(projectToEdit);
  };

  const onDeleteProject = (projectId) => {
    console.log(`deleting project ${projectId}`);
    // const filteredProjects = projects.filter(project => {
    //   return project.id !== projectId;
    // })
    // setProjects(filteredProjects)
    setProjects(projects.filter(project => project.id !== projectId));
  }

  const renderForm = () => {
    // conditionally renders the right form component based on the value of projectToEdit in state
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <>
      {renderForm()}
      <ProjectList
        projects={projects}
        setSelectedPhase={setSelectedPhase}
        onEditProject={onEditProject}
        onUpdateProject={onUpdateProject}
        onDeleteProject={onDeleteProject}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  )
}

export default ProjectsContainer;