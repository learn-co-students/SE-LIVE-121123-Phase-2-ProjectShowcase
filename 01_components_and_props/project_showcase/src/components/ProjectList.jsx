import ProjectListItem from "./ProjectListItem";

export default function ProjectList(props) {
  // console.log("🚀 ~ file: ProjectList.jsx:2 ~ ProjectList ~ props:", props)
  const { projects } = props; // destructuring assignment
  // console.log("🚀 ~ file: ProjectList.jsx:4 ~ ProjectList ~ projects:", projects)
  const projectItems = projects.map(
    (
      projectObj // moving the map logic out of the JSX (just a pref)
    ) => <ProjectListItem key={projectObj.id} project={projectObj} />
  );
  return (
    <section>
      <h1>All Projects</h1>
      <div className="filters">
        <button>All</button>
        <button>Phase 1</button>
        <button>Phase 2</button>
        <button>Phase 3</button>
        <button>Phase 4</button>
        <button>Phase 5</button>
      </div>
      <ul className="cards">
        {/* <ProjectListItem project={props.projects[0]}/> // without destructuring
            <ProjectListItem project={props.projects[1]}/> // this works, but brittle
            <ProjectListItem project={projects[2]}/> // with destructuring
            <ProjectListItem project={projects[3]}/>
            <ProjectListItem project={projects[4]}/>
            <ProjectListItem project={projects[5]}/> */}
        {/* {projects.map(projectObj => { // this is much better; projects can have dynamic length
                    return <ProjectListItem project={projectObj} />
                })} */}
        {projectItems}
      </ul>
    </section>
  );
}
