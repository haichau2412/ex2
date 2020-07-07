import React, { useEffect } from "react";
import "./App.css";
import {
  sendLoginRequest,
  sendSignupRequest,
} from "./redux/authentication/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state);

  console.log(data);
  useEffect(() => {
    dispatch(sendSignupRequest({ username: "aaabbc  ", password: "xxx" }));
  }, [dispatch]);
  return <>AAAA</>;
}

export default App;
