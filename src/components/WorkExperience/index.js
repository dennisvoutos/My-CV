import React from "react";
import { workData } from "./constants";
import { Card, Modal } from "antd";
import "./WorkExperience.css";
import { getModalData } from "./utils";
import { CloseButton } from "../Helpers/Buttons";
import { FaRegHandPointer } from "react-icons/fa";

export const WorkExperience = () => {
  const [modalInfo, setModalInfo] = React.useState(false);
  const closeModal = React.useCallback(() => {
    setModalInfo(false);
  }, []);
  const { modalTitle, modalContent } = modalInfo && getModalData(modalInfo);
  return (
    <>
      <h3>Professional Experience</h3>
      <hr className="line" />
      <div className="experienceWrapper">
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

        {workData.map((item, i) => {
          return (
            <Card
              hoverable
              className="cardContent"
              onClick={() => setModalInfo(item)}
              key={i}
            >
              <h4>
                {item.title}
                <span>{item.endDate === "Currently" && " (Currently)"}</span>
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <FaRegHandPointer size={24} />
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};
