import React, { useEffect, useRef, useState } from "react";
import { StyledAlert } from "./AlertStyle";

const ModalAlert = ({ message, reset }) => {
  const [show, setShow] = useState(false);

  const alertRef = useRef();

  useEffect(() => {
    let timer;
    if (message !== "") {
      setShow(true);
      timer = setTimeout(() => {
        setShow(false);
        reset();
      }, 1000);
    } else {
      setShow(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [message, reset]);

  return (
    <>
      <StyledAlert type='warning' ref={alertRef} show={show}>
        {message}
      </StyledAlert>
    </>
  );
};

export default ModalAlert;
