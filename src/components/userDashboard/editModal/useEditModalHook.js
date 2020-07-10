import { useState } from "react";

const useEditModalHook = () => {
  const [isVisible, setVisible] = useState(false);
  const [userId, setUserid] = useState();

  console.log(userId);

  const handleClick = (userId) => {
    setVisible(true);
    setUserid(userId);
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
    userId,
    handleOk,
    handleCancel,
  };
};

export default useEditModalHook;
