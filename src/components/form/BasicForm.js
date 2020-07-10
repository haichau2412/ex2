import React from "react";
import { useFormik } from "formik";
import {
  FormTitle,
  InputField,
  Input,
  Button,
  FormContainer,
  Wrapper,
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
  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Wrapper>
      <FormContainer>
        <FormTitle>{title}</FormTitle>
        {children || null}
        <form onSubmit={handleSubmit}>
          {valueStandard.map(({ type, name }) => {
            return (
              <InputField key={name}>
                <Input
                  type={type}
                  name={name}
                  onChange={handleChange}
                  value={values[name]}
                  placeholder={name}
                />
                <ErrorDiv>{errors[name]}</ErrorDiv>
              </InputField>
            );
          })}
          <Button type='submit' style={{ textTransform: "uppercase" }}>
            {buttonText}
          </Button>
        </form>
      </FormContainer>
    </Wrapper>
  );
};

export default BasicForm;
