import React from "react";
import { Modal } from "antd";
import EditForm from "./EditForm";

const CreateEditModal = ({
  cockpit: { isVisible, handleOk, handleCancel, userId },
}) => {
  return (
    <Modal visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
      <EditForm userId={userId} />
    </Modal>
  );
};

export default CreateEditModal;
