import React, { useState } from "react";
import { Modal, Button } from "antd";
import { StyledButton } from "../style";
import AddForm from "./AddForm";
import ModalAlert from "../Alert/ModalAlert";
import useModalMessage from "../Alert/useModalMessage";

const CreateUserModal = () => {
  const [isVisible, setVisible] = useState(false);

  const { message, changeMsg, reset } = useModalMessage();

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
      <StyledButton>
        <Button type='primary' onClick={showModal}>
          Add User
        </Button>
      </StyledButton>
      <Modal visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <ModalAlert message={message} reset={reset} />
        <AddForm sucessCallback={handleOk} failCallback={changeMsg} />
      </Modal>
    </>
  );
};

export default CreateUserModal;
