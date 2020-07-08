import React, { useEffect, useRef, useState } from "react";
import useClickoutside from "./useClickoutside";
import { StyledAlert } from "./AlertStyle";

const Alert = ({ message, type }) => {
  const [show, setShow] = useState(false);

  const alertRef = useRef();
  useClickoutside(alertRef, () => setShow(false));

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <StyledAlert type={type} ref={alertRef} show={show}>
      {message}
    </StyledAlert>
  );
};

export default Alert;
