import React from "react";
import BasicForm from "../../form/BasicForm";
import { useDispatch } from "react-redux";
import { checkEditCurrentUser } from "../../../redux/userManagement/actions";

const EditForm = ({ userId }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(checkEditCurrentUser({ id: userId, ...values }));
  };

  const initialValues = {
    username: "",
    phone: "",
  };

  const valueStandard = [
    {
      type: "text",
      name: "username",
    },
    {
      type: "text",
      name: "phone",
    },
  ];

  return (
    <div>
      <BasicForm
        title='Edit'
        onSubmit={onSubmit}
        initialValues={initialValues}
        valueStandard={valueStandard}
        buttonText='Edit user'
      />
    </div>
  );
};

export default EditForm;
