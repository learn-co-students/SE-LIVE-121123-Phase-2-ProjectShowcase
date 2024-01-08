import Header from './components/Header'
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import projectsArr from './projects';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList projects={projectsArr} />
      {/* Remember: rendering the component above with this prop is the same as invoking the function  ProjectList({projects: projectsArr})*/}
    </div>
  )

}

export default App;
