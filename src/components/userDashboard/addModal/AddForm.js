import React from "react";
import BasicForm from "../../form/BasicForm";
import { useDispatch } from "react-redux";

const AddForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch({ type: "ADD_NEW_USER", payload: { ...values } });
  };

  const initialValues = {
    username: "",
    phone: "",
    password: "",
  };

  const valueStandard = [
    {
      type: "text",
      name: "username",
    },
    {
      type: "password",
      name: "password",
    },
    {
      type: "text",
      name: "phone",
    },
  ];

  return (
    <div>
      <BasicForm
        title='Add User'
        onSubmit={onSubmit}
        initialValues={initialValues}
        valueStandard={valueStandard}
        buttonText='Add User'
      />
    </div>
  );
};

export default AddForm;
