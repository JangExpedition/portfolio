import Project from "./Project";

const Projects = () => {
  const projects = [
    { id: 1, title: "BLABLA", content: "ffffdididiekekekdsjklsjkdfklwemfklmdklf", imgSrc: "zzzzzzz" },
    { id: 2, title: "BLABLA", content: "ffffdididiekekekdsjklsjkdfklwemfklmdklf", imgSrc: "zzzzzzz" },
    { id: 3, title: "BLABLA", content: "ffffdididiekekekdsjklsjkdfklwemfklmdklf", imgSrc: "zzzzzzz" },
    { id: 4, title: "BLABLA", content: "ffffdididiekekekdsjklsjkdfklwemfklmdklf", imgSrc: "zzzzzzz" },
  ];

  return (
    <section className="Projects">
      <h2 className="first-menu-name">
        Projects<span className="point-color">.</span>
      </h2>
      <div className="project-container">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
