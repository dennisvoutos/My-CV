import { useState } from "react";
import { TableData } from "../components/TechSkills/constants";

const MobileTechSkills = ({ theme }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  // Group skills into categories for better mobile organization
  const skillCategories = {
    "Programming Languages": [
      "Java",
      "JavaScript",
      "Python",
      "C/C++",
      "Matlab",
    ],
    "Web Technologies": ["React", "HTML/CSS", "SCSS modules"],
    "Data & Analytics": [
      "SQL",
      "Pandas",
      "NumPy",
      "PyTorch",
      "Tensorflow",
      "Tableu",
    ],
    Methodologies: ["Agile", "Scrum"],
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div
      className={`mobile-tech-skills ${
        theme === "experimental"
          ? "mobile-experimental-tech"
          : "mobile-professional-tech"
      }`}
    >
      <h3 className="mobile-section-title">Technical Skills</h3>

      <div className="mobile-skills-container">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mobile-skill-category">
            <div
              className="mobile-category-header"
              onClick={() => toggleCategory(category)}
            >
              <span className="mobile-category-title">{category}</span>
              <span className="mobile-category-icon">
                {expandedCategories[category] ? "▼" : "▶"}
              </span>
            </div>

            {expandedCategories[category] && (
              <div className="mobile-skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="mobile-skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Show all skills in a simple grid by default */}
        <div className="mobile-all-skills">
          <div className="mobile-skills-grid">
            {TableData.map((skill, index) => (
              <div key={index} className="mobile-skill-tag">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTechSkills;
