const Project = ({ project }) => {
  return (
    <div className="Project">
      <div className="project-images"></div>
      <div className="project-wrapper">
        <div className="project-title-wrapper">
          <h1>{project.title}</h1>
        </div>
        <p className="project-content">{project.content}</p>
      </div>
    </div>
  );
};

export default Project;
