import React from "react";
import { Card, Modal, Button } from "antd";
import "./Education.css";
import { educationData } from "./constants";
import { getEducationModalData } from "./utils";
export const Education = () => {
  const [modalInfo, setModalInfo] = React.useState(false);
  const closeModal = React.useCallback(() => {
    setModalInfo(false);
  }, []);
  const { modalContent, modalTitle } =
    modalInfo && getEducationModalData(modalInfo);
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

      <h3 style={{ marginTop: "30px" }}>Education</h3>
      <hr className="line" />
      {educationData.map((item, i) => {
        return (
          <Card
            className="cardContent"
            key={i}
            onClick={() => {
              setModalInfo(item);
            }}
          >
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </div>
  );
};
