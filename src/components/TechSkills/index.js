import { TableData } from "./constants";
import { Card, Row, Col } from "antd";
export const TechSkills = ({ theme }) => {
  const getSkillStyle = () => {
    if (theme === "experimental") {
      return {
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.1)",
        padding: "12px",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(100, 149, 237, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "#e3f2fd",
        fontWeight: "500",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        cursor: "default",
      };
    }
    return {
      textAlign: "center",
      background: "#f0f2f5",
      padding: "8px",
      borderRadius: "5px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    };
  };

  return (
    <div>
      <h3>Technical Skills</h3>
      <hr className="line"></hr>
      <Card style={{ margin: "20px auto", maxWidth: "1600px" }}>
        <Row gutter={[16, 16]}>
          {TableData.map((skill, index) => (
            <Col key={index} span={6}>
              <div
                style={getSkillStyle()}
                className={theme === "experimental" ? "experimental-skill" : ""}
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
