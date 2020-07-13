import React from "react";
import { Modal } from "antd";

const DeleteModal = ({
  cockpit: { isVisible, handleOk, handleCancel, currentUsername },
}) => {
  return (
    <Modal visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
      Do you want to delete this user :{" "}
      <span style={{ color: "#237804" }}>{currentUsername}</span>
    </Modal>
  );
};

export default DeleteModal;
