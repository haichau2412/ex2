import React, { useCallback, useMemo } from "react";
import { useFormik } from "formik";
import validate from "./validators";
import {
  FormTitle,
  InputField,
  Input,
  Button,
  FormContainer,
  Wrapper,
  ErrorDiv,
  NavLink,
} from "./styles";
import { useDispatch } from "react-redux";
import { sendRequest } from "../../redux/authentication/actions";
import { initialValues } from "./ultilities";
import PropTypes from "prop-types";

const AuthForm = ({ type, changeType }) => {
  const dispatch = useDispatch();
  console.log("AuthForm");
  const submitForm = useCallback(
    (values) => {
      dispatch(sendRequest[type](values));
    },
    [type, dispatch]
  );

  const formInitialValues = useMemo(() => initialValues[type], [type]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formInitialValues,
    onSubmit: submitForm,
    validate,
  });

  const { errors, handleChange, handleSubmit, values } = formik;

  return (
    <Wrapper>
      <FormContainer>
        <FormTitle>{type === "signup" ? "Sign up" : "Log in"}</FormTitle>
        <NavLink onClick={changeType}>
          {type === "signup"
            ? "Have account ? Please log in"
            : "No account ? Please sign up"}
        </NavLink>
        <form onSubmit={handleSubmit}>
          <InputField>
            <Input
              autocomplete='username'
              type='text'
              name='username'
              onChange={handleChange}
              value={values.username}
              placeholder='username'
            />
            <ErrorDiv>{errors.username}</ErrorDiv>
          </InputField>
          <InputField>
            <Input
              autocomplete={
                type === "signup" ? "new-password" : "current-password"
              }
              type='password'
              name='password'
              onChange={handleChange}
              value={values.password}
              placeholder='password'
            />
            <ErrorDiv>{errors.password}</ErrorDiv>
          </InputField>
          {type === "signup" ? (
            <>
              <InputField>
                <Input
                  name='phone'
                  type='text'
                  onChange={handleChange}
                  value={values.phone}
                  placeholder='phone'
                />
                <ErrorDiv>{errors.phone}</ErrorDiv>
              </InputField>
            </>
          ) : null}

          <Button type='submit' style={{ textTransform: "uppercase" }}>
            {type === "signup" ? "Sign up" : "Log in"}
          </Button>
        </form>
      </FormContainer>
    </Wrapper>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  type: PropTypes.oneOf(["signup", "login"]).isRequired,
};
