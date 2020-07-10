import { createNewUser } from "../redux/userManagement/ultilities";

export const fetchFakeAuth = (data, { username, password }) => {
  return new Promise((resolve, reject) => {
    const user = data.find(
      (user) => user.username === username && user.password === password
    );
    setTimeout(() => {
      if (user) {
        return resolve({ status: true, id: user.id });
      }
      reject("Username or password is incorrect");
    }, 2000);
  });
};

export const fetchFakeSignUp = (data, authInfo) => {
  return new Promise((resolve, reject) => {
    const isExist = data.find((user) => user.username === authInfo.username);
    setTimeout(() => {
      if (!isExist) {
        const newUser = createNewUser(authInfo);
        return resolve({ status: true, newUser });
      }
      return reject("Username exists");
    }, 2000);
  });
};

export default {
  login: fetchFakeAuth,
  signup: fetchFakeSignUp,
};
