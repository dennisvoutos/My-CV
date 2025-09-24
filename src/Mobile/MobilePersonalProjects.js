import { projects } from "../components/PersonalProjects/constants";
import { openInNewTab } from "../constants";

const MobilePersonalProjects = ({ theme }) => {
  return (
    <div
      className={`mobile-personal-projects ${
        theme === "experimental"
          ? "mobile-experimental-projects"
          : "mobile-professional-projects"
      }`}
    >
      <h3 className="mobile-section-title">Personal Projects</h3>

      <div className="mobile-projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mobile-project-card"
            onClick={() => openInNewTab(project.url)}
          >
            <div className="mobile-project-header">
              <h4 className="mobile-project-name">{project.name}</h4>
              <span className="mobile-project-link-icon">🔗</span>
            </div>

            <div className="mobile-project-content">
              <p className="mobile-project-description">
                {project.description}
              </p>

              <div className="mobile-project-footer">
                <span className="mobile-project-cta">
                  Tap to view repository
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilePersonalProjects;
