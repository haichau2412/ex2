import React, { useEffect } from "react";
import { FormContainer, Wrapper } from "./style";
import { useHistory } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";
import Alert from "../../components/ultilities/Alert";

const Auth = ({ authenticated }) => {
  const history = useHistory();

  useEffect(() => {
    if (authenticated) {
      history.replace("/users");
    }
  }, [authenticated, history]);

  return (
    <FormContainer>
      <Wrapper>
        <Alert />
        <AuthForm />
      </Wrapper>
    </FormContainer>
  );
};

export default Auth;
