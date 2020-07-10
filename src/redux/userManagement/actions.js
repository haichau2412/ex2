export const addNewUser = "ADD_NEW_USER";
export const editUser = "EDIT_USER";
export const deleteUser = "DELETE_USER";
export const addUserFromServer = "ADD_NEW_USER_FROM_SERVER";

export const checkDeleteCurrentUser = (id) => {
  return (dispatch, getState) => {
    const currentUserId = getState().auth.currentUserId;
    if (currentUserId === id) {
      return;
    } else return dispatch({ type: "DELETE_USER", payload: { id } });
  };
};

export const checkEditCurrentUser = (data) => {
  return (dispatch, getState) => {
    const currentUserId = getState().auth.currentUserId;
    if (currentUserId === data.id) {
      return;
    } else return dispatch({ type: "EDIT_USER", payload: { ...data } });
  };
};
