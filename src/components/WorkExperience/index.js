import React from "react";
import { workData } from "./constants";
import { Button, Card, Modal } from "antd";
import "./WorkExperience.css";
import { getModalData } from "./utils";

export const WorkExperience = () => {
  const [modalInfo, setModalInfo] = React.useState(false);
  const closeModal = React.useCallback(() => {
    setModalInfo(false);
  }, []);
  const { modalTitle, modalContent } = modalInfo && getModalData(modalInfo);
  return (
    <div className="experienceWrapper">
      <Modal
        onOk={() => {
          setModalInfo(false);
        }}
        closeIcon={null}
        width={"900px"}
        footer={
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={closeModal}>Close</Button>
          </div>
        }
        open={modalInfo !== false}
        destroyOnClose
        title={modalTitle}
      >
        {modalContent}
      </Modal>

      <h3>Professional Experience</h3>
      <hr className="line" />
      {workData.map((item, i) => {
        return (
          <Card
            className="cardContent"
            onClick={() => setModalInfo(item)}
            key={i}
          >
            <h4>
              {item.title}
              {item.endDate === "Currently" && <h5>(Currently)</h5>}
            </h4>
          </Card>
        );
      })}
    </div>
  );
};
