import { Card } from "antd";
import { projects } from "./constants";
import { openInNewTab } from "../../constants";

export const PersonalProjects = ({ theme }) => {
  const getContainerStyle = () => {
    return {
      display: "flex",
      gap: "20px",
      flexWrap: "nowrap",
      overflowX: "auto",
      padding: "10px 0",
    };
  };

  const getCardStyle = () => {
    return {
      minWidth: "300px",
      minHeight: "200px",
      flex: "1 1 300px",
      margin: "0",
      padding: "20px",
      cursor: "pointer",
    };
  };

  return (
    <div>
      <h3>Personal projects</h3>
      <hr className="line"></hr>
      <div style={getContainerStyle()}>
        {projects.map((item, i) => {
          return (
            <Card
              key={i}
              style={getCardStyle()}
              hoverable
              onClick={() => openInNewTab(item.url)}
              className={
                theme === "experimental" ? "experimental-project-card" : ""
              }
            >
              <h2 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>
                {item.name}
              </h2>
              <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
                {item.description}
              </p>
              <h4 style={{ fontSize: "0.9rem", opacity: "0.8" }}>
                You can see the repository of the project by clicking on the
                card
              </h4>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
