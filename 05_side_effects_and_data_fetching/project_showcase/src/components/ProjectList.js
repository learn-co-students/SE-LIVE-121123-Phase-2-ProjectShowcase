import { useState, useEffect } from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({
  projects,
  onSelectPhase,
  searchQuery,
  onSearchChange,
  selectedPhase,
}) => {
  const [searchInputText, setSearchInputText] = useState(""); // add this state to help debounce search requests

  // this useEffect is to debounce search requests
  useEffect(() => {
    const scheduledUpdate = setTimeout(() => {
      console.log("scheduledUpdate");
      onSearchChange(searchInputText);
    }, 500);

    return () => {
      console.log("cancelling previous update");
      clearTimeout(scheduledUpdate);
    };
  }, [searchInputText]);

  const handleSearch = (e) => {
    // this has been modified to update the local input state as part of debouncing search requests
    setSearchInputText(e.target.value);
  };

  // const searchResults = projects.filter(project => { // this filter no longer necessary as search input is now sent as query param to server
  //   return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  // })

  const projectListItems = projects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  return (
    <section>
      {/* <button onClick={onLoadProjects}>Load Projects</button>  this no longer needed because of useEffect fetching on parent */}

      <h2>Projects</h2>

      <div className="filter">
        {/* click events set selectedPhase state on ProjectsContainer; selectedPhase is passed back down and used here in ternary to set 'active' css class */}
        <button
          className={selectedPhase === "" ? "active" : ""}
          onClick={() => onSelectPhase("")}
        >
          All
        </button>
        <button
          className={selectedPhase === "5" ? "active" : ""}
          onClick={() => onSelectPhase("5")}
        >
          Phase 5
        </button>
        <button
          className={selectedPhase === "4" ? "active" : ""}
          onClick={() => onSelectPhase("4")}
        >
          Phase 4
        </button>
        <button
          className={selectedPhase === "3" ? "active" : ""}
          onClick={() => onSelectPhase("3")}
        >
          Phase 3
        </button>
        <button
          className={selectedPhase === "2" ? "active" : ""}
          onClick={() => onSelectPhase("2")}
        >
          Phase 2
        </button>
        <button
          className={selectedPhase === "1" ? "active" : ""}
          onClick={() => onSelectPhase("1")}
        >
          Phase 1
        </button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchInputText}
      />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
