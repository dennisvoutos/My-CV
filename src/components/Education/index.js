import React from "react";
import { Card, Modal } from "antd";
import "./Education.css";
import { educationData } from "./constants";
import { getEducationModalData } from "./utils";
import { CloseButton } from "../Helpers/Buttons";
import { FaRegHandPointer } from "react-icons/fa";
export const Education = () => {
  const [modalInfo, setModalInfo] = React.useState(false);
  const closeModal = React.useCallback(() => {
    setModalInfo(false);
  }, []);
  const { modalContent, modalTitle } =
    modalInfo && getEducationModalData(modalInfo);
  return (
    <div className="educationWrapper">
      <Modal
        onOk={() => {
          setModalInfo(false);
        }}
        closeIcon={null}
        width={"900px"}
        footer={
          <div style={{ display: "flex", justifyContent: "end" }}>
            <CloseButton onClick={closeModal}>Close</CloseButton>
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
          <>
            <Card
              className="cardContent"
              key={i}
              onClick={() => {
                setModalInfo(item);
              }}
            >
              <h4>{item.title}</h4>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <FaRegHandPointer size={24} />
              </div>
            </Card>
          </>
        );
      })}
    </div>
  );
};
