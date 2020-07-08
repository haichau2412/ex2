import React from "react";
import { useDispatch } from "react-redux";
const Users = () => {
  const dispatch = useDispatch();
  return <div onClick={() => dispatch({ type: "LOG_OUT" })}>Users</div>;
};

export default Users;
