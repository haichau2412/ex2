import React, { useState, useEffect } from "react";
import { FormContainer } from "./style";
import { useHistory } from "react-router-dom";
import AuthForm from "../../components/auth/authForm";
import Alert from "../../components/ultilities/Alert";

const Auth = ({ authenticated }) => {
  console.log("Auth");
  const history = useHistory();
  const [formType, setFormType] = useState("signup");

  const changeFormType = () => {
    formType === "signup" ? setFormType("login") : setFormType("signup");
  };

  useEffect(() => {
    if (authenticated) {
      history.replace("/users");
    }
  }, [authenticated, history]);

  return (
    <FormContainer>
      <Alert />
      <AuthForm type={formType} changeType={changeFormType} />
    </FormContainer>
  );
};

export default Auth;
