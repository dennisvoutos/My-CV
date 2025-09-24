import { useState } from "react";
import { educationData } from "../components/Education/constants";

const MobileEducation = ({ theme }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className={`mobile-education ${
        theme === "experimental"
          ? "mobile-experimental-education"
          : "mobile-professional-education"
      }`}
    >
      <h3 className="mobile-section-title">Education</h3>

      <div className="mobile-education-container">
        {educationData.map((item, index) => (
          <div key={index} className="mobile-education-item">
            <div
              className="mobile-education-header"
              onClick={() => toggleExpand(index)}
            >
              <div className="mobile-education-title-section">
                <h4 className="mobile-education-degree">{item.title}</h4>
                <p className="mobile-education-university">{item.university}</p>
                <p className="mobile-education-dates">
                  {item.startDate} - {item.endDate}
                </p>
              </div>
              <span className="mobile-expand-icon">
                {expandedItems[index] ? "▼" : "▶"}
              </span>
            </div>

            {expandedItems[index] && (
              <div className="mobile-education-details">
                <div className="mobile-education-description">
                  {item.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="mobile-education-detail-item"
                    >
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

export default MobileEducation;
