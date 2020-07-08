export const fetchFakeAuth = (data, { username, password }) => {
  return new Promise((resolve, reject) => {
    const isValid = data.find(
      (user) => user.username === username && user.password === password
    );
    setTimeout(() => {
      if (isValid) {
        return resolve(true);
      }
      reject("Username or password is incorrect");
    }, 2000);
  });
};

export const fetchFakeSignUp = (data, { username }) => {
  return new Promise((resolve, reject) => {
    const isExist = data.find((user) => user.username === username);
    setTimeout(() => {
      if (!isExist) {
        return resolve(true);
      }
      return reject("Username exists");
    }, 2000);
  });
};

export default {
  login: fetchFakeAuth,
  signup: fetchFakeSignUp,
};
