import {
  initialState,
  addUser,
  addUserFromServer,
  editUser,
  deleteUser,
} from "./ultilities";
import * as actionTypes from "./actions";

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addNewUser: {
      return addUser(state.users, action.payload);
    }
    case actionTypes.addUserFromServer: {
      return addUserFromServer(state.users, action.payload.data);
    }
    case actionTypes.editUser: {
      return editUser(state.users, action.payload);
    }
    case actionTypes.deleteUser: {
      return deleteUser(state.users, action.payload);
    }
    default:
      return state;
  }
};
export default reducers;
