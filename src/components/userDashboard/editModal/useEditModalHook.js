import { useState } from "react";

import useModalMessage from "../Alert/useModalMessage";

const useEditModalHook = () => {
  const [isVisible, setVisible] = useState(false);
  const [currentUserData, setCurrentUserData] = useState({
    username: "",
    phone: "",
  });

  const { message, changeMsg, reset } = useModalMessage();

  const handleClick = (userData) => {
    setVisible(true);
    setCurrentUserData(userData);
  };
  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return {
    handleClick,
    isVisible,
    currentUserData,
    handleOk,
    handleCancel,
    message,
    changeMsg,
    reset,
  };
};

export default useEditModalHook;
