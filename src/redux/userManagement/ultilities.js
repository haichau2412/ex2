import { v4 } from "uuid";

export const initialState = {
  users: [],
};

export const createNewUser = ({ password, username, phone }) => {
  return {
    username,
    phone,
    createAt: Date.now(),
    password,
    id: v4(),
  };
};

export const createCloneArray = (array) => {
  return array.map((item) => ({ ...item }));
};

export const deleteItemAtIndex = (array, index) => {
  const cloneArray = createCloneArray(array);
  return {
    users: [...cloneArray.slice(0, index), ...array.slice(index + 1)],
  };
};

export const addUser = (users, data) => {
  let cloneUsers = createCloneArray(users);
  const newUser = createNewUser({ ...data });
  cloneUsers.push(newUser);
  return { users: cloneUsers };
};

export const editUser = (users, data) => {
  let cloneUsers = createCloneArray(users);
  const userIndex = cloneUsers.find((user) => user.id === data.id);
  if (!userIndex) {
    return { users };
  }
  cloneUsers[userIndex] = { ...cloneUsers[userIndex], ...data };
  return { users: cloneUsers };
};

export const deleteUser = (users, { id }) => {
  const userIndex = users.find((user) => user.id === id);
  if (!userIndex) {
    return { users };
  } else {
    return deleteItemAtIndex(users, userIndex);
  }
};
