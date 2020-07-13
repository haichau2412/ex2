import React from "react";
import { useFormik } from "formik";
import {
  FormTitle,
  InputField,
  Input,
  Button,
  FormContainer,
  ErrorDiv,
} from "./styles";
import validate from "./validators";

const BasicForm = ({
  title,
  onSubmit,
  initialValues,
  valueStandard,
  children,
  buttonText,
}) => {
  const {
    errors,
    handleChange,
    handleSubmit,
    values,
    isSubmitting,
  } = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <FormContainer>
      <FormTitle>{title}</FormTitle>
      {children || null}
      <form onSubmit={handleSubmit}>
        {valueStandard.map(({ type, name, placeholder }) => {
          return (
            <InputField key={name}>
              <Input
                type={type}
                name={name}
                onChange={handleChange}
                value={values[name]}
                placeholder={placeholder}
              />
              <ErrorDiv>{errors[name]}</ErrorDiv>
            </InputField>
          );
        })}
        <Button
          disabled={isSubmitting}
          type='submit'
          style={{ textTransform: "uppercase" }}
        >
          {buttonText}
        </Button>
      </form>
    </FormContainer>
  );
};

export default BasicForm;
