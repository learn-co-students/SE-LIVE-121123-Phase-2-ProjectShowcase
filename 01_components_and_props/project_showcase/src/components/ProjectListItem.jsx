export default function ProjectListItem({project}) { // destructuring the project key from props
    console.log("🚀 ~ file: ProjectListItem.js:4 ~ ProjectListItem ~ props:", project)
    const {image, name, about, link, phase} = project // project is an obj, so can destructure further
    return (
      <li className="card">
        <figure className="image">
          <img src={image} alt={`${name} screenshot`} />
        </figure>
        <section className="details">
          <h4>{name}</h4>
          <p>{about}</p>
          <p><a href={link}>Live Demo</a></p>
        </section>
        <footer className="extra">
          <span className="badge blue">Phase {phase}</span>
        </footer>
      </li>
    )
  }