import { Card } from "antd";
import "./Education.css";
import { educationData } from "./constants";
export const Education = () => {
  return (
    <div className="experienceWrapper">
      <h3 style={{ marginTop: "30px" }}>Education</h3>
      <hr className="line" />
      {educationData.map((item, i) => {
        return (
          <Card className="cardContent" key={i}>
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </div>
  );
};
