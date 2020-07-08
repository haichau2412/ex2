import React, { useState, useEffect } from "react";
import { FormContainer } from "./style";
import { useHistory } from "react-router-dom";
import AuthForm from "../../components/auth/authForm";
import Alert from "../../components/ultilities/Alert";

const Auth = ({ authenticated }) => {
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
      <Alert
        type='warning'
        message={
          formType === "signup"
            ? "Username existed"
            : "Username or password incorrect"
        }
      />
      <AuthForm type={formType} changeType={changeFormType} />
    </FormContainer>
  );
};

export default Auth;
