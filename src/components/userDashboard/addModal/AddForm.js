import React from "react";
import BasicForm from "../../form/BasicForm";
import { useDispatch } from "react-redux";
import { checkAddUser } from "../../../redux/userManagement/actions";

const AddForm = ({ sucessCallback, failCallback }) => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(checkAddUser({ values, sucessCallback, failCallback }));
    resetForm();
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
      placeholder: "username",
    },
    {
      type: "password",
      name: "password",
      placeholder: "password",
    },
    {
      type: "text",
      name: "phone",
      placeholder: "phone",
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
