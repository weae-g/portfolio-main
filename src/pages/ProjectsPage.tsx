import ProjectInfo from "@/components/ProjectInfo";
import { useModal } from "@/utils/ModalProvider";

const ProjectsPage = () => {
  const { showModal } = useModal();

  const onProjectInfo = (projectName: string) => {
    showModal(<ProjectInfo projectName={projectName} />);
  };

  return (
    <div className="page projects-page">
      <div className="page__header">
        <h1 className="page__title">// Projects</h1>
      </div>
      <div className="page__content">
        <div className="projects">
          {["Project 1", "Project 2", "Project 3", "Project 4"].map(
            (project, index) => (
              <div
                className="card"
                key={index}
                style={{
                  backgroundImage: `url('/landing_${index + 1}.png')`,
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
                onClick={() => onProjectInfo(project)}>
                <p className="card__text">{project}</p>
                <div className="card__overlay">
                  <span className="card__plus">+</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
