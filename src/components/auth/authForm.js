import React from "react";
import { useFormik } from "formik";
import { Form, Input } from "antd";
import validate from "./validators";
import { initialValues } from "./ultilities";
import FormItem from "antd/lib/form/FormItem";

const LoginForm = ({ type }) => {
  const formik = useFormik({
    initialValues: initialValues[type],
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  const {
    errors,
    handleChange,
    // handleSubmit,
    values,
  } = formik;

  return (
    <Form>
      <FormItem label='Username' />
      <Input
        name='username'
        onChange={handleChange}
        value={values.username}
        placeholder='username'
      />
      <p>{errors.username}</p>
      <FormItem label='Password' name='password' />
      <Input.Password
        type
        name='password'
        onChange={handleChange}
        value={values.password}
        placeholder='password'
      />
      <p>{errors.password}</p>
      {type === "signup" ? (
        <>
          <FormItem label='Phone' name='phone' />
          <Input name='phone' onChange={handleChange} value={values.phone} />
          <p>{errors.phone}</p>
        </>
      ) : null}
    </Form>
  );
};

export default LoginForm;
