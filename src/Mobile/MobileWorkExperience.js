import { useState } from "react";
import { workData } from "../components/WorkExperience/constants";

const MobileWorkExperience = ({ theme }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className={`mobile-work-experience ${
        theme === "experimental"
          ? "mobile-experimental-work"
          : "mobile-professional-work"
      }`}
    >
      <h3 className="mobile-section-title">Professional Experience</h3>

      <div className="mobile-work-container">
        {workData.map((item, index) => (
          <div key={index} className="mobile-work-item">
            <div
              className="mobile-work-header"
              onClick={() => toggleExpand(index)}
            >
              <div className="mobile-work-title-section">
                <h4 className="mobile-work-title">
                  {item.title}
                  {item.endDate === "Currently" && " (Currently)"}
                </h4>
                <p className="mobile-work-company">{item.company}</p>
                <p className="mobile-work-dates">
                  {item.startDate} - {item.endDate}
                </p>
              </div>
              <span className="mobile-expand-icon">
                {expandedItems[index] ? "▼" : "▶"}
              </span>
            </div>

            {expandedItems[index] && (
              <div className="mobile-work-details">
                <div className="mobile-work-description">
                  {item.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="mobile-work-detail-item">
                      • {detail}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileWorkExperience;
