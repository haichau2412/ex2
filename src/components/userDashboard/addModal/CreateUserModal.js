import React, { useState } from "react";
import { Modal, Button } from "antd";
import AddForm from "./AddForm";

const CreateUserModal = () => {
  const [isVisible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };
  return (
    <>
      <Button type='primary' onClick={showModal}>
        Add User
      </Button>
      <Modal visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <AddForm />
      </Modal>
    </>
  );
};

export default CreateUserModal;
