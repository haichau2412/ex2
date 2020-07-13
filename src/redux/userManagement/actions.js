export const addNewUser = "ADD_NEW_USER";
export const editUser = "EDIT_USER";
export const deleteUser = "DELETE_USER";
export const addUserFromServer = "ADD_NEW_USER_FROM_SERVER";

export const checkAddUser = ({ values, sucessCallback, failCallback }) => {
  return (dispatch, getState) => {
    const users = getState().usr.users;
    const isExist = users.find((user) => user.username === values.username);
    if (isExist) {
      failCallback(`Username exists: ${values.username}`);
      return;
    } else {
      sucessCallback();
      return dispatch({ type: "ADD_NEW_USER", payload: { ...values } });
    }
  };
};

export const checkDeleteCurrentUser = (id) => {
  return (dispatch, getState) => {
    const currentUserId = getState().auth.currentUserId;
    if (currentUserId === id) {
      return;
    } else return dispatch({ type: "DELETE_USER", payload: { id } });
  };
};

export const checkEditCurrentUser = ({
  values,
  successCallback,
  failCallback,
}) => {
  return (dispatch, getState) => {
    const currentUserId = getState().auth.currentUserId;
    const users = getState().usr.users;
    const isExist = users.find((user) => user.username === values.username);

    if (currentUserId === values.id) {
      return;
    } else if (isExist) {
      failCallback(`Username exists: ${values.username}`);
      return;
    } else {
      successCallback();
      return dispatch({ type: "EDIT_USER", payload: { ...values } });
    }
  };
};
