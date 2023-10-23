const Project = ({ project }) => {
  return (
    <div className="Project">
      <div className="project-images"></div>
      <div className="project-wrapper">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-content">{project.content}</p>
      </div>
    </div>
  );
};

export default Project;
