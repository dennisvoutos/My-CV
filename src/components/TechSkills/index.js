import { Table } from "antd";
import { TableData } from "./constants";
export const TechSkills = () => {
  return (
    <div>
      <h3>Technical Skills</h3>
      <hr></hr>
      <Table dataSource={TableData} />
    </div>
  );
};
