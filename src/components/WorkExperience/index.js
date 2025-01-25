import { workData } from "./constants";
import { Card } from "antd";
import "./WorkExperience.css";
export const WorkExperience = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Professional Experience</h3>
      <hr className="line" />
      {workData.map((item) => {
        return (
          <Card>
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </div>
  );
};
