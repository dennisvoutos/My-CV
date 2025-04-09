import { Card } from "antd";
import { projects } from "./constants";

export const PersonalProjects = () => {
  const openInNewTab = (url) => {
    window?.open(url, "_blank").focus();
  };
  return (
    <div>
      <h3>Personal projects</h3>
      <hr className="line"></hr>
      <div style={{ display: "flex" }}>
        {projects.map((item, i) => {
          return (
            <Card
              style={{ padding: "15px", margin: "15px" }}
              hoverable
              onClick={() => openInNewTab(item.url)}
            >
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <h4>
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
