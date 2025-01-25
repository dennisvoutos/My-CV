import { Card } from "antd";
import { projects } from "./constants";

export const PersonalProjects = () => {
  return (
    <div>
      <h3>Personal projects</h3>
      <hr className="line"></hr>
      <div style={{ display: "flex" }}>
        {projects.map((item, i) => {
          return (
            <Card style={{ padding: "15px", margin: "15px" }}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <h4>You can see the repository of the project here:</h4>
              <a href={item.url}>{item.url}</a>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
