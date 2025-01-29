import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
interface ProjectInfoProps {
  projectName: string | null;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ projectName }) => {
  return (
    <div className="project-info">
      <div className="project-info__images">
        <div className="project-info__images-item">
          <img src="/landing_1.png" alt="1" />
        </div>
        <div className="project-info__images-item">
          <img src="/landing_1.png" alt="2" />
        </div>
        <div className="project-info__images-item">
          <img src="/landing_1.png" alt="3" />
        </div>
      </div>

      <div className="project-info__header">
        <p className="project-info__name">{projectName}</p>
        <div className="project-info__actions">
          <button className="btn github-button">
            Github
            <FaGithub />
          </button>
          <button className="btn site-button">
            View
            <FaEye />
          </button>
        </div>
      </div>
      <div className="project-info__content">
        <div className="tech-stack">
          <p className="subtitle">Tech-Stack</p>
          <ul className="tech-stack__list">
            <li className="tech-stack__list-item">React</li>
            <li className="tech-stack__list-item">Nest</li>
            <li className="tech-stack__list-item">Postgresql</li>
          </ul>
        </div>
        <div className="project-info__description">
          <p className="subtitle">Description</p>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            labore expedita quos deserunt eaque minima consectetur assumenda
            similique, omnis cum incidunt iusto optio reprehenderit placeat
            officia accusamus quas. Maiores, officia?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
