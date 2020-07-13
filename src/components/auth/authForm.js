import React, { useCallback, useMemo, useState } from "react";
import { NavLink } from "../form/styles";
import { useDispatch, useSelector } from "react-redux";
import { sendRequest } from "../../redux/authentication/actions";
import { valueStandard, buttonText, title, initialValues } from "./ultilities";
import BasicForm from "../form/BasicForm";

const getAuthenticating = (state) => state.auth.isAuthenticating;

const AuthForm = () => {
  const [formType, setFormType] = useState("signup");

  const isAuthenticating = useSelector(getAuthenticating);

  const changeFormType = useCallback(() => {
    formType === "signup" ? setFormType("login") : setFormType("signup");
  }, [formType]);

  const dispatch = useDispatch();

  const submitForm = useCallback(
    (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(
        sendRequest[formType]({ values, callback: () => setSubmitting(false) })
      );
    },
    [formType, dispatch]
  );

  const authFormState = useMemo(
    () => ({
      initialValues: initialValues[formType],
      onSubmit: submitForm,
      title: title[formType],
      buttonText: buttonText[formType],
      valueStandard: valueStandard[formType],
    }),
    [formType, submitForm]
  );
  const FormChangeLink = useMemo(
    () => (
      <>
        <NavLink onClick={changeFormType}>
          {formType === "signup"
            ? "Have account ? Please log in"
            : "No account ? Please sign up"}
        </NavLink>
        {isAuthenticating ? <div>Authenticating ...</div> : null}
      </>
    ),
    [formType, changeFormType, isAuthenticating]
  );
  return <BasicForm {...authFormState}>{FormChangeLink}</BasicForm>;
};

export default AuthForm;
