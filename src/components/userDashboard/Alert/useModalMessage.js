import { useState } from "react";

const useModalMessage = () => {
  const [message, setMessage] = useState("");

  const changeMsg = (msg) => {
    setMessage(msg);
  };

  const reset = () => {
    setMessage("");
  };

  return {
    message,
    changeMsg,
    reset,
  };
};

export default useModalMessage;
