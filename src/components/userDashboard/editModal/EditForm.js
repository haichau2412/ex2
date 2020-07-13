import React from "react";
import BasicForm from "../../form/BasicForm";
import { useDispatch } from "react-redux";
import { checkEditCurrentUser } from "../../../redux/userManagement/actions";

const EditForm = ({
  userId,
  username,
  phone,
  failCallback,
  successCallback,
}) => {
  const dispatch = useDispatch();
  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    dispatch(
      checkEditCurrentUser({
        values: { id: userId, ...values },
        failCallback,
        successCallback,
      })
    );
    setSubmitting(false);
  };

  const initialValues = {
    username,
    phone,
  };

  const valueStandard = [
    {
      type: "text",
      name: "username",
      placeholder: username,
    },
    {
      type: "text",
      name: "phone",
      placeholder: phone,
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
