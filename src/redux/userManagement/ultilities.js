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

  if (cloneUsers.findIndex((user) => user.username === data.username) === -1) {
    cloneUsers.push(newUser);
  }
  return { users: cloneUsers };
};

export const addUserFromServer = (users, data) => {
  let cloneUsers = createCloneArray(users);
  cloneUsers.push(data);
  return { users: cloneUsers };
};

export const editUser = (users, data) => {
  let cloneUsers = createCloneArray(users);
  const userIndex = cloneUsers.findIndex((user) => user.id === data.id);
  const usernameIndex = cloneUsers.findIndex(
    (user) => user.username === data.username
  );

  if (userIndex === -1 || usernameIndex !== -1) {
    return { users };
  }
  cloneUsers[userIndex] = { ...cloneUsers[userIndex], ...data };
  return { users: cloneUsers };
};

export const deleteUser = (users, { id }) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return { users };
  } else {
    return deleteItemAtIndex(users, userIndex);
  }
};
