import { TableData } from "./constants";
import { Card, Row, Col } from "antd";
export const TechSkills = () => {
  return (
    <div>
      <h3>Technical Skills</h3>
      <hr className="line"></hr>
      <Card style={{ margin: "20px auto", maxWidth: "1600px" }}>
        <Row gutter={[16, 16]}>
          {TableData.map((skill, index) => (
            <Col key={index} span={6}>
              <div
                style={{
                  textAlign: "center",
                  background: "#f0f2f5",
                  padding: "8px",
                  borderRadius: "5px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                {skill}
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};
