import React, { useEffect, useRef, useState } from "react";
import useClickoutside from "./useClickoutside";
import { StyledAlert } from "./AlertStyle";
import { useSelector, useDispatch } from "react-redux";

const getError = (state) => state.auth.error;

const AddAlertHandler = ({ children }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const alertRef = useRef();
  useClickoutside(alertRef, () => setShow(false));

  useEffect(() => {
    let timer;
    if (error !== "") {
      setShow(true);
      timer = setTimeout(() => setShow(false), 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [error, dispatch]);

  useEffect(() => {
    dispatch({ type: "RESET_ERROR" });
    return () => {
      dispatch({ type: "RESET_ERROR" });
    };
  }, [dispatch]);
  return (
    <>
      <StyledAlert type='warning' ref={alertRef} show={show}>
        {error}
      </StyledAlert>
      {children}
    </>
  );
};

export default AddAlertHandler;
