import React from "react";
import { Modal } from "antd";
import EditForm from "./EditForm";
import ModalAlert from "../Alert/ModalAlert";

const EditModal = ({
  cockpit: {
    isVisible,
    handleOk,
    handleCancel,
    currentUserData,
    message,
    reset,
    changeMsg,
  },
}) => {
  return (
    <Modal visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
      <ModalAlert message={message} reset={reset} />
      <EditForm
        {...currentUserData}
        failCallback={changeMsg}
        successCallback={handleOk}
      />
    </Modal>
  );
};

export default EditModal;
