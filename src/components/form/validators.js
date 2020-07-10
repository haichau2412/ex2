const validateUsername = (username) => {
  if (!username) {
    return "Required";
  } else if (/[^\d\w]/.test(username)) {
    return "Special characters are not allowed ";
  }
  return true;
};

const validatePassword = (password) => {
  if (!password) {
    return "Required";
  } else if (password.length < 6) {
    return "Password must have at least 6 characters";
  }
  return true;
};

const validatePhone = (phone) => {
  if (!phone) {
    return "Required";
  } else if (
    !/(^(056|058|059|03[2-9]|09[0-4]|09[6-9]|08[1-9]|070|07[6-9])){1}[0-9]{7}$/g.test(
      phone
    )
  ) {
    return "Invalid phone number";
  }
  return true;
};

const validator = {
  username: validateUsername,
  password: validatePassword,
  phone: validatePhone,
};

const validateData = (data) => {
  return Object.keys(data).reduce((error, field) => {
    const fieldError = validator[field](data[field]);
    if (typeof fieldError !== "boolean") {
      error[field] = fieldError;
    }
    return error;
  }, {});
};

export default validateData;
