import React, { useState, useEffect } from "react";
import { FormContainer } from "./style";
import { useHistory } from "react-router-dom";
import AuthForm from "../../components/auth/authForm";
import AddAlertHandler from "../../components/ultilities/Alert";

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
    <AddAlertHandler>
      <FormContainer>
        <AuthForm type={formType} changeType={changeFormType} />
      </FormContainer>
    </AddAlertHandler>
  );
};

export default Auth;
