import { Card } from "antd";
import "./Education.css";
import { educationData } from "./constants";
export const Education = () => {
  return (
    <div>
      <h3 style={{ marginTop: "30px" }}>Education</h3>
      <hr />
      {educationData.map((item) => {
        return (
          <Card>
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </div>
  );
};
