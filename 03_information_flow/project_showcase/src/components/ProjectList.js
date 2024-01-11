import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects, onLoadProjects }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    // loadProject() // originally called here
    onLoadProjects(); // but now were invoking the callback fn passed in props
  };

  // const loadProjects = () => { // lifted up to ProjectContainer
  //   fetch("http://localhost:4000/projects")
  //     .then((res) => res.json())
  //     .then((projects) => setProjects(projects));
  // }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const renderProjects = (filteredProjects) => {
    // slight variation from yesterday; we can use functions to return our mapped arrays of components
    return filteredProjects.map((project) => (
      <ProjectListItem
        key={project.id}
        {...project} // this spread operator copies all the key/value pairs from the project object into the props object
        // name={project.name} // the line above is shorthand for this, etc.
        // phase={project.phase}
        // project={project} // you could also pass the whole project object as a prop, but you would need to handle it accordingly on ProjectListItem
      />
    ));
  };

  return (
    <section>
      <button onClick={handleClick}>Load Projects</button>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />

      <ul className="cards">{renderProjects(searchResults)}</ul>
    </section>
  );
};

export default ProjectList;
